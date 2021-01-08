https://habr.com/ru/post/493496/

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

---

export const KEY_API_V3_AUTH = 'e88e0c0879d78fd4250835c98d191ef1';
export const MOVIE_DB_GET = `https://api.themoviedb.org/3/movie/551?api_key=${KEY_API_V3_AUTH}&language=ru`

export const errorMessage = ` index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`;

---

Картинку из полученного от Rest API объекта № 551 из поля
backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg"

можно получить так :

https://image.tmdb.org/t/p/original/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg

то есть :

https://image.tmdb.org/t/p/original + /v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg

---

Картинка постера шириной 500 px :

https://image.tmdb.org/t/p/w500/rlhOTgqTHhPk7q65MLbQhnEP1wj.jpg

w500, w400, w300, w200 - проверено, остальные размеры не проверялись

---

Ключ API (v3 auth)
c3540064959dd045e2f276153a135bb6

Пример API-запроса
https://api.themoviedb.org/3/movie/550?api_key=c3540064959dd045e2f276153a135bb6

Ключ доступа к API (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzU0MDA2NDk1OWRkMDQ1ZTJmMjc2MTUzYTEzNWJiNiIsInN1YiI6IjVmZWIxNWNlMTUxMWFhMDAzZmYzYWZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IP1RTg6fih7SGNTI3ubwFPWdXyncigB5i04L3SwlIzA

---

adult: false
backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg"
belongs_to_collection:
backdrop_path: "/kE3SAAQfWVkjJUZy1ohha8hy3LH.jpg"
id: 372257
name: "Приключения «Посейдона» (Коллекция)"
poster_path: "/aLX4UHBF6Mo4GgfyBUfEpBWBS37.jpg"
**proto**: Object
budget: 5000000
genres: Array(4)
0: {id: 28, name: "боевик"}
1: {id: 12, name: "приключения"}
2: {id: 18, name: "драма"}
3: {id: 53, name: "триллер"}
length: 4
**proto**: Array(0)
homepage: ""
id: 551
imdb_id: "tt0069113"
original_language: "en"
original_title: "The Poseidon Adventure"
overview: "Крупномасштабная экранизация романа Пола Галлико начинается в новогоднюю ночь на роскошном океанском лайнере «Посейдон», идущем из Америки в Грецию. Празднование прерывается внезапным ударом гигантской волны, вызванной близким подводным землетрясением. Вода обрушивается на корабль и переворачивает его вверх дном. Небольшой горстке людей во главе со священником чудом удается пробраться в отсеки, еще не заполненные водой. Пассажирам придется пережить несколько жутких часов в напряженной борьбе за выживание, прежде чем они снова увидят свет солнца."
popularity: 10.054
poster_path: "/rlhOTgqTHhPk7q65MLbQhnEP1wj.jpg"
production_companies: Array(2)
0: {id: 10281, logo_path: null, name: "Kent Productions", origin_country: ""}
1: {id: 25, logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png", name: "20th Century Fox", origin_country: "US"}
length: 2
**proto**: Array(0)
production_countries: Array(1)
0: {iso_3166_1: "US", name: "United States of America"}
length: 1
**proto**: Array(0)
release_date: "1972-12-13"
revenue: 84563118
runtime: 117
spoken_languages: [{…}]
status: "Released"
tagline: ""
title: "Приключения «Посейдона»"
video: false
vote_average: 7.2
vote_count: 527

---


--- 1 --> разобраться с обработкой ошибок в fetch
--- 2 --> вместо пустого компонента 556 рендерить что-то другое
++- 3 --> прелоадер при загрузке даных

const Page404 = ({ location }) => (
   <div>
      <h2>No match found for <code>{location.pathname}</code></h2>
   </div>
);
