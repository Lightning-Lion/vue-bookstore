<template>
    <div>
      <h1>书籍天堂</h1>
      <div class="container">
        <Store :books="books" @add-to-cart="addToCart" />
        <CartPage />
      </div>
    <!-- <BookDetailPage></BookDetailPage> -->
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { v4 as uuidv4 } from 'uuid';
  import { onMounted } from 'vue';
  import Store from './Store.vue';
  import CartPage from './CartListPack.vue';
  import BookDetailPage from './BookDetailPage.vue';
  import { useDetailedBookStore } from "../stores/detailedBook.js";
  import { useBookStore } from "../stores/bookStore.js";
  import { useCart } from "../stores/cart.js";

  //挂载
  onMounted(() => {
  })

  const detailedBookStore = useDetailedBookStore();
  const bookStore = useBookStore();
    // 伪造书籍数据
  const books = bookStore.books;

  const cart = useCart();
 
  // 购物车数据
  const cartList = cart.cartList
  
  // 添加到购物车
  const addToCart = (book) => {
    cartList.push(book);
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin: 20px 0;
  }
  
  .container {
    display: flex;
    gap: 20px;
  }
  </style>
  