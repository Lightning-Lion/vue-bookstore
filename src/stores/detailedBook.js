// stores/counter.js
import { defineStore } from 'pinia';

export const useDetailedBookStore = defineStore('detailedBook', {
  state: () => ({
    book:null
  }),
  actions: {
    setBook(book) {
      this.book = book;
    }
  }
});