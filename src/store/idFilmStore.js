import {makeAutoObservable} from 'mobx';

class IdFilmStore {
  idFilm = 551;

  constructor() {
    makeAutoObservable(this)
  }

  changeIdFilm(id) {
    this.idFilm = id;
    console.log('id', this.idFilm);
  }

}

export default new IdFilmStore();