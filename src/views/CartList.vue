<template>
    <el-dialog v-model="dialogTableVisible" width="800">
      <el-result
        icon="success"
        title="下单成功"
        sub-title="书籍很快就会寄到你家"
      >
        <template #extra>
          <el-button type="primary" @click="donePay()">返回</el-button>
        </template>
      </el-result>
  </el-dialog>
    <div class="cart">
      <h2>购物车</h2>
      <transition-group name="list" tag="div">
        <el-table :data="cart" stripe style="width: 100%" v-if="cart.length > 0">
          <el-table-column prop="title" label="书名"></el-table-column>
          <el-table-column prop="price" label="价格" :formatter="formatPrice"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click.prevent="$emit('delete-row', scope.$index)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </transition-group>
      <p v-if="cart.length === 0">购物车是空的</p>
      <p v-else>总价: ¥{{ totalPrice }}</p>
      <el-button v-if="cart.length > 0" @click="showDialog" type="success" class="checkout-button">结算</el-button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import { ref } from 'vue';
  
const dialogTableVisible = ref(false);

const showDialog = () => {
  dialogTableVisible.value = true;
};

  const props = defineProps({
    cart: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  });
  
  
  

  const emit = defineEmits(['delete-row','done-pay']);
  
  // 格式化价格
  const formatPrice = (row) => {
    return `¥${row.price}`;
  };

  const donePay = () => {
    dialogTableVisible.value = false
    emit('done-pay');
  };
  </script>
  
  <style scoped>
  .cart {
    min-width: 325px;
    width: 30%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .checkout-button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .checkout-button:hover {
    background-color: #218838;
  }
  
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  </style>
  