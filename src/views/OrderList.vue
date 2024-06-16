<template>
    <div class="vstack">
        <h1>订单列表</h1>
      <div v-if="orders.length === 0">
        <p>暂无订单</p>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="`日期：${order.date}`" name="index" v-for="(order,index) in orders" :key="order.id">
                <el-table :data="order.books" stripe style="width: 100%" v-if="order.books.length > 0">
                    <el-table-column prop="title" label="书名"></el-table-column>
                    <el-table-column prop="price" label="价格" :formatter="formatPrice"></el-table-column>
                </el-table>
                <div class="hsatck">
                    <!-- <el-icon><Money /></el-icon> -->
                    <el-button type="primary" :icon="Money" circle />
                <h3>总价: ¥{{ order.price }}</h3>
                </div>
            </el-collapse-item>
        </el-collapse>
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
import { ref, computed } from 'vue';
import { useCart } from "../stores/cart.js";

const cart = useCart();
const orders = cart.paiedList

</script>
<style scoped>

.vstack {
    margin-bottom: 600px;
    width: 800px;
}

.hsatck {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.smallPadding {
    padding: 20px;
}

</style>
