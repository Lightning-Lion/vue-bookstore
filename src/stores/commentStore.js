import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    commentList:[
        
          {
            id: uuidv4(),
            bookID: '477aa0ee-05cb-4f34-a23a-c484b27e2eee',
            content: "这本书对于Vue.js的新手非常友好，内容详尽，讲解清晰。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '477aa0ee-05cb-4f34-a23a-c484b27e2eee',
            content: "深入浅出地讲解了Vue.js的各个方面，是一本非常好的学习资料。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '3bd16d5e-ef25-4a7e-83be-ee84ca74446d',
            content: "本书是学习JavaScript的绝佳资源，覆盖了所有重要的概念。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '3bd16d5e-ef25-4a7e-83be-ee84ca74446d',
            content: "非常详细的JavaScript教程，适合初学者和有经验的开发者。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '1998d411-53d1-406b-96ae-06d3b03451ca',
            content: "设计网站的完美指南，非常适合初学者和有经验的开发者。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '1998d411-53d1-406b-96ae-06d3b03451ca',
            content: "这本书帮助我掌握了HTML与CSS的基本知识，强烈推荐！",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '5a7eca90-ac49-4e0f-92dd-9c4b8910ec6b',
            content: "这本书详细讲解了计算机网络的各个层次，理论与实践结合得非常好。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '5a7eca90-ac49-4e0f-92dd-9c4b8910ec6b',
            content: "计算机网络的经典教材，内容丰富，适合深入学习。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '8cebb071-cfb4-43bc-b925-c6b112ba2e1c',
            content: "React初学者必读！书中的实例和项目非常实用，帮助很大。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '8cebb071-cfb4-43bc-b925-c6b112ba2e1c',
            content: "详细介绍了React的各个方面，非常实用的参考书。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: 'c737d326-d3c5-410c-82d7-ce81f432e4f3',
            content: "这本书从基础到高级内容都有涉猎，是学习Python编程的好帮手。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: 'c737d326-d3c5-410c-82d7-ce81f432e4f3',
            content: "Python编程入门的最佳选择，内容丰富，易于理解。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: 'bb81ab31-021f-45ee-9e18-74b9fa16e10c',
            content: "AI领域的经典教材，内容丰富，讲解清晰，非常值得一读。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: 'bb81ab31-021f-45ee-9e18-74b9fa16e10c',
            content: "人工智能的全面指南，适合所有对AI感兴趣的人。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: 'ecccd123-c302-45bf-b6c6-f9ea23379c54',
            content: "成为全栈开发人员的必读书籍，涵盖了前后端的所有知识。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: 'ecccd123-c302-45bf-b6c6-f9ea23379c54',
            content: "这本书帮助我全面了解了全栈开发的各个方面，强烈推荐。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '24835bc4-689d-4116-80e8-7bef9699aa09',
            content: "用React构建动态Web应用的实用指南，案例丰富，非常有帮助。",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '24835bc4-689d-4116-80e8-7bef9699aa09',
            content: "React开发的实战宝典，通过实际案例帮助理解React。",
            timestamp: new Date().toLocaleString()
          }
    ]
  }),
  actions: {
    addComment(comment) {
      this.commentList.push({ id: uuidv4(), ...comment });
    },
    deleteComment(id) {
      this.commentList = this.commentList.filter((comment) => comment.id !== id);
    }
  }
});