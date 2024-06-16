<template>
    <div class="vstack commentBottomPadding">
        <div class="book-details">
            <div class="book-cover-container">
                <img :src="book.cover" :alt="book.title" class="book-cover" />
            </div>
            <div class="book-info">
                <h1>{{ book.title }}</h1>
                <p>{{ book.description }}</p>
                <p>价格: ¥{{ book.price }}</p>
                <button @click="addToCart(book)">添加到购物车</button>
            </div>

        </div>
        <CommentPage :bookID="book.id"  ></CommentPage>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { useDetailedBookStore } from "../stores/detailedBook.js";
import { useBookStore } from "../stores/bookStore.js";
import { useCart } from "../stores/cart.js";
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import CommentPage from './CommentPage.vue'

const book = useDetailedBookStore().book || useBookStore().books[0];
const cart = useCart();

// 购物车数据
const cartList = cart.cartList

// 添加到购物车
const addToCart = (book) => {
    cartList.push(book);
    ElNotification({
        title: '添加完成',
        message: h('i', { style: 'color: teal' }, `成功添加 ${book.title} 到购物车`),
    })
};


</script>

<style scoped>
/* 样式 */
.book-details {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
}

.vstack {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.book-cover-container {
    flex: 1;
    display: flex;
    justify-content: center;
}

.book-cover {
    width: 300px;
    height: 450px;
    object-fit: cover;
}

.commentBottomPadding {
    margin-bottom: 500px;
}

.book-info {
    flex: 1;
    padding: 0 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>