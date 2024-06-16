<template>
    <h2 class="left">
        评论区
    </h2>
    <el-timeline style="max-width: 600px">
      <el-timeline-item :timestamp=" comment.timestamp " placement="top" v-for="comment in myCommentList" :key="comment.id">
        <el-card>
          <h4>{{ comment.content }}</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <div class="comment-input gap20">
      <el-input type="textarea" v-model="newComment" placeholder="对这本书有什么想法？"></el-input>
      <el-button @click="addNewComment">评论</el-button>


    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useCommentStore } from '../stores/commentStore.js';
  import { v4 as uuidv4 } from 'uuid';
  import { h } from 'vue';
  import { ElNotification } from 'element-plus';
  
  const props = defineProps({
    bookID: {
      type: String,
      required: true
    }
  });
  
  const commentStore = useCommentStore();
  const commentList = computed(() => commentStore.commentList);
  const myCommentList = computed(() => commentList.value.filter(comment => comment.bookID === props.bookID));
  const newComment = ref('');
  
  const addNewComment = () => {
    commentStore.addComment({
      id: uuidv4(),
      bookID: props.bookID,
      content: newComment.value,
      timestamp: new Date().toLocaleString()
    });
    newComment.value = '';
    ElNotification({
      title: '评论成功',
      message: h('i', { style: 'color: teal' }, `评论已发送`),
      position: 'bottom-right',
    });
  };
  </script>
  
  <style scoped>
  /* Styles */
  .book-details {
    display: flex;
    margin-top: 20px;
    margin-bottom: 500px;
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
  
  .comment-input {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  
.left {
    margin-right: auto;
}

.gap20 {
  gap: 20px;
}

  .comment-input .el-input {
    margin-right: 10px;
    flex: 1;
    
  }
  </style>