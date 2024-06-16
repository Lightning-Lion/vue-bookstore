<template>
  <CartList :cart="cartList" @delete-row="deleteRow" :total-price="totalPrice" @add-to-cart="addToCart"
    @done-pay="donePay" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { onMounted } from 'vue';
import Store from './Store.vue';
import CartList from './CartList.vue';
import BookDetailPage from './BookDetailPage.vue';
import { useDetailedBookStore } from "../stores/detailedBook.js";
import { useBookStore } from "../stores/bookStore.js";
import { useCart } from "../stores/cart.js";



const detailedBookStore = useDetailedBookStore();
const bookStore = useBookStore();
// 伪造书籍数据
const books = bookStore.books;

const cart = useCart();

// 购物车数据
const cartList = cart.cartList

// 删除购物车中的书籍
const deleteRow = (index) => {
  cartList.splice(index, 1);
};

const donePay = () => {
  const totalPriceCopy = totalPrice.value;
  cart.paiedList.push({
    id: uuidv4(),
    date: new Date().toLocaleString(),
    price: totalPriceCopy,
    books: cartList.map(book => ({ ...book }))
  });
  console.log(cart.paiedList)
  cartList.splice(0, cartList.length);
};

// 计算总价
const totalPrice = computed(() => {
  return cartList.reduce((total, book) => total + book.price, 0).toFixed(2);
});
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