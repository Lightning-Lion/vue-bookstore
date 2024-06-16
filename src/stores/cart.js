// stores/counter.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
export const useCart = defineStore('cart', {
  state: () => ({
    cartList:[],
    paiedList:[]
  }),
  actions: {

  }
});