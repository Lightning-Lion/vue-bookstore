// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
export const useBookStore = defineStore("bookStore", {
  state: () => ({
    books: [
      {
        id: "477aa0ee-05cb-4f34-a23a-c484b27e2eee",
        title: "Vue.js基础",
        cover: "/covers/cover1.png",
        description: "全面的Vue.js指南。",
        price: 29.99,
      },
      {
        id: "3bd16d5e-ef25-4a7e-83be-ee84ca74446d",
        title: "JavaScript高级程序设计",
        cover: "/covers/cover2.png",
        description: "从零开始学习JavaScript。",
        price: 39.99,
      },
      {
        id: "1998d411-53d1-406b-96ae-06d3b03451ca",
        title: "HTML与CSS设计",
        cover: "/covers/cover3.png",
        description: "用HTML和CSS设计美丽的网站。",
        price: 24.99,
      },
      {
        id: "5a7eca90-ac49-4e0f-92dd-9c4b8910ec6b",
        title: "计算机网络：自顶向下方法",
        cover: "/covers/cover4.png",
        description:
          "本书采用自顶向下的方法讲解计算机网络的原理和实践，从应用层到物理层，全面覆盖网络技术的各个方面。",
        price: 52.99,
      },
      {
        id: "8cebb071-cfb4-43bc-b925-c6b112ba2e1c",
        title: "现代前端开发：React实践",
        cover: "/covers/cover5.png",
        description:
          "本书详细介绍了React的基础知识和高级应用，通过大量的实践案例和代码示例，帮助读者快速掌握现代前端开发的核心技术。",
        price: 42.99,
      },
      {
        id: "c737d326-d3c5-410c-82d7-ce81f432e4f3",
        title: "Python编程：从入门到实践",
        cover: "/covers/cover6.png",
        description:
          "一本适合初学者的Python编程指南，涵盖了从基础语法到高级应用的各个方面，通过实际项目帮助读者深入理解Python编程。",
        price: 35.99,
      },
      {
        id: "bb81ab31-021f-45ee-9e18-74b9fa16e10c",
        title: "人工智能：一种现代的方法",
        cover: "/covers/cover7.png",
        description:
          "一本全面介绍人工智能理论和实践的经典教材，涵盖了AI的基础概念、算法和应用领域，是学习和研究人工智能的必备参考书。",
        price:  64.99,
      },
      {
        id: "ecccd123-c302-45bf-b6c6-f9ea23379c54",
        title: "全栈开发",
        cover: "/covers/cover8.png",
        description: "成为全栈开发人员。",
        price: 49.99,
      },
      {
        id: "24835bc4-689d-4116-80e8-7bef9699aa09",
        title: "React实战",
        cover: "/covers/cover9.png",
        description: "用React构建动态Web应用。",
        price: 34.99,
      }
    ],
  }),
  actions: {},
});
