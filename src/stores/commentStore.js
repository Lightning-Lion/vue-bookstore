import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    commentList:[
        {
            id: uuidv4(),
            bookID: '477aa0ee-05cb-4f34-a23a-c484b27e2eee',
            content: "这本书令我受益匪浅！",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '3bd16d5e-ef25-4a7e-83be-ee84ca74446d',
            content: "难以置信的好书",
            timestamp: new Date().toLocaleString()
          },
          {
            id: uuidv4(),
            bookID: '1998d411-53d1-406b-96ae-06d3b03451ca',
            content: "我跟着这本书，从0开始学习了一切，它是我的指路人",
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