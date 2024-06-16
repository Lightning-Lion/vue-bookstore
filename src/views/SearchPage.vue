<template>
    <div class="vstack decoration">
        <el-input
      v-model="searchWorld"
      style="width: 240px"
      placeholder="Type something"
      :prefix-icon="Search"
    >      <template #append>
        <el-button  :icon="Search" />
      </template>
    </el-input>
        <div class="bookshelf">
     <h3 v-if="searchedBooks.length === 0">没有找到相关书籍</h3>
      <div class="book" v-for="book in searchedBooks" :key="book.id">
  
        <button @click="goToPage(book)" class="plain-button">
          <img :src="book.cover" :alt="book.title" class="book-cover" />
          <h3>{{ book.title }}</h3>
          <p>{{ book.description }}</p>
        </button>
      </div>
    </div>
    </div>

  </template>
  
  <script setup>
  import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Money,
  ShoppingCartFull,
  Star,
} from '@element-plus/icons-vue'
  import { useDetailedBookStore } from "../stores/detailedBook.js";
  import { inject } from 'vue';
  import { useBookStore } from "../stores/bookStore.js";
  import { ref, computed } from 'vue';
  import { defineProps, defineEmits } from 'vue';
  const bookStore = useBookStore();
    // 伪造书籍数据
  const books = bookStore.books;
  const input2 = ref('')
  const router = inject('router');
  const book = {
    id: '123',
    title: 'Vue.js基础',
    cover: '/covers/cover1.png',
    description: '全面的Vue.js指南。',
    price: 29.99
  }
  

  
  const detailedBookStore = useDetailedBookStore();
  
  function goToPage(book) {
    console.log("goToPage")
    console.log(book)
    // router.push({ name: 'BookDetail', props: { book: book } })
  
    detailedBookStore.setBook(book);
    router.push({ name: 'BookDetail' })
  };
  const searchWorld = ref('');
  const searchedBooks = computed(() =>
    books.filter((book) => book.title.includes(searchWorld.value))
);

  const emit = defineEmits(['add-to-cart']);
  </script>
  
  <style scoped>
  .bookshelf {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
  
  .book {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .plain-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-align: inherit;
    outline: none;
  }
  
  .plain-button:hover,
  .plain-button:focus,
  .plain-button:active {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    outline: none;
    /* 你可以根据需要添加更多无样式的属性 */
  }

  .decoration {
    gap:20px;
    margin:20px;
    margin-bottom: 700px;
  }
  .vstack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .book-cover {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
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