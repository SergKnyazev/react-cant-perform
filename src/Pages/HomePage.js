import React, { useState, useEffect } from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Loader } from '@progress/kendo-react-indicators';
import '@progress/kendo-theme-default/dist/all.css';

import { MOVIE_DB_URL, MOVIE_DB_KEY, MOVIE_DB_LANGUAGE } from '../config';
import ResponseStatus404 from './ResponseStatus404';

const HomePage = () => {
  const [movie, setMovie] = useState(null);
  const [idMovie, setIdMovie] = useState(551);
  const [loading, setLoading] = useState(true);
  const [error404, setError404] = useState(false);

  const MOVIE_DB_GET = `${MOVIE_DB_URL}${idMovie}${MOVIE_DB_KEY}${MOVIE_DB_LANGUAGE}`;
  const message404 = `Фильма с id=${idMovie} НЕ существует!`;

  useEffect(() => {
    let cleanupFunction = false;

    const fetchData = async () => {
      try {
        const response = await fetch(MOVIE_DB_GET);
        console.log('response -->');
        console.log(response);
        console.log(response.ok);
        console.log(response.status);
        const result = await response.json();
        console.log('result -->');
        console.log(result);
        // непосредственное обновление состояния
        if (!cleanupFunction) {
          setMovie(result);
        }
        setLoading(false);

        if (!response.ok) {
          setError404(true);
          throw Error(message404);
        } else {
          setError404(false);
        }
      } catch (e) {
        console.error(`Внимание! Ошибка! ${e.message}`);
      }
    };

    fetchData();
    // функция очистки useEffect
    return () => (cleanupFunction = true);
  }, [MOVIE_DB_GET]);

  const renderList = (arr) => {
    return arr ? (
      <ul>
        {arr.map((item, index) => {
          return <li key={item.name + index}>{item.name}</li>;
        })}
      </ul>
    ) : null;
  };

  const changeIdMovie = (e) => {
    setLoading(true);
    console.log(e.value);
    setIdMovie(e.value);
  };

  const descriptionMovie = () => {
    const {
      id,
      overview,
      budget,
      production_companies,
      production_countries,
      poster_path,
      title,
      original_title,
      status_message,
      release_date,
      vote_average,
      vote_count,
    } = movie;

    // release_date: "1972-12-13"
    // vote_average: 7.2
    // vote_count: 527
    
    const poster = `https://image.tmdb.org/t/p/w200${poster_path}`;

    if (loading) {
      console.log('loading');
      console.log(loading);
      return (
        <div className='loader'>
          <Loader size='large' type='converging-spinner' />
        </div>
      );
    }

    if (error404) {
      console.log('error404');
      console.log(error404);
      return (
        <ResponseStatus404 
          message404={message404}
          statusMessage={status_message}
        />
      );
    }

    return (
      // loading
      // ?
      // <div className='loader'>
      //   <Loader
      //     size='large'
      //     type='converging-spinner'
      //   />
      // </div>
      // :
      <section>

        <h2>{title}</h2>
        <p>{original_title}</p>
        <div className='rating'>
          <span>{release_date}</span>
          <span>{vote_average}</span>
          <span>{vote_count}</span>
        </div>
        {id ? <p>ID: {id}</p> : <p>Нет данных</p>}
        <div className='wrapper'>
            <img src={poster} alt='' />
          <div>
            <h3>Описание фильма :</h3>
            {overview ? <p>{overview}</p> : <p>Нет описания</p>}
          </div>        
        </div>
        {budget ? <p>Бюджет: {budget}</p> : <p>Бюджет: Нет данных</p>}
        <h3>Продакшн компания: </h3>
        {renderList(production_companies)}
        <h3>Продакшн страна: </h3>
        {renderList(production_countries)}
      </section>
    );
  };

  return (
    <main>
      <h1>Галерея фильмов</h1>

      <label style={{ textAlign: 'center', display: 'block' }}>
        Выберите ID фильма =
        <NumericTextBox
          value={idMovie}
          min={551}
          max={577}
          step={1}
          onChange={changeIdMovie}
        />
      </label>

      {movie ? descriptionMovie() : false}
    </main>
  );
};

export default HomePage;
