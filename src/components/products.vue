<script setup>
import { ref, reactive, onBeforeMount, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import productItem from './productitem.vue'
const ProductList = ref();
onBeforeMount(() => {
    getProductList();
})
const route = useRoute();


async function getProductList() {

    let url = "https://dummyjson.com/products";
    let response = await axios.get(url);

    if (response.status == 200) {
        ProductList.value = response.data.products;
    }
}

</script>
<template>
    <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
        <h1 class="text-3xl">Tailwind CSS</h1>
    </div>

    <!-- ✅ Grid Section - Starts Here 👇 -->
    <section id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <template v-for="(product, index ) in ProductList" :key="index">
            <productItem :product="product" />
        </template>


    </section>
</template>

<style scoped></style>