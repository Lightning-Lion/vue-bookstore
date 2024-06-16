<template>
    <div class="vstack bottom">
        <h1>购物车</h1>
        <CartListPack />
    </div>
</template>

<script setup>
import CartListPack from './CartListPack.vue';
</script>

<style scoped>
.vstack {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.bottom {
    margin-bottom:500px
}
</style>