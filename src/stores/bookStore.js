// stores/counter.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books:[
        { id: ('477aa0ee-05cb-4f34-a23a-c484b27e2eee'), title: 'Vue.js基础', cover: '/covers/cover1.png', description: '全面的Vue.js指南。', price: 29.99 },
        { id: ('3bd16d5e-ef25-4a7e-83be-ee84ca74446d'), title: 'JavaScript高级程序设计', cover: '/covers/cover2.png', description: '从零开始学习JavaScript。', price: 39.99 },
        { id: ('1998d411-53d1-406b-96ae-06d3b03451ca'), title: 'HTML与CSS设计', cover: '/covers/cover3.png', description: '用HTML和CSS设计美丽的网站。', price: 24.99 },
        { id: ('ecccd123-c302-45bf-b6c6-f9ea23379c54'), title: '全栈开发', cover: '/covers/cover1.png', description: '成为全栈开发人员。', price: 49.99 },
        { id: ('24835bc4-689d-4116-80e8-7bef9699aa09'), title: 'React实战', cover: '/covers/cover2.png', description: '用React构建动态Web应用。', price: 34.99 },
      ]
  }),
  actions: {

  }
});