import { makeObservable, observable, action } from "mobx";

export class SearchStoreClass {
  phrase: string = "";

  constructor() {
    makeObservable(this, {
      phrase: observable,
      changePhrase: action,
    });
  }

  changePhrase(phrase: string) {
    this.phrase = phrase;
  }
}

export const SearchStore = new SearchStoreClass();
