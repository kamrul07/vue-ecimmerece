<script setup>
import { ref, reactive, onBeforeMount, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import productItem from './productitem.vue'
const ProductLists = ref();
onMounted(() => {
    getProductLists();

})
const route = useRoute();


async function getProductLists() {

    let url = "https://dummyjson.com/products/category/" + route.params.slug;
    let response = await axios.get(url);

    if (response.status == 200) {
        ProductLists.value = response.data.products;
    }
    console.log(ProductLists.value);
}

</script>



<template>
    <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Product list from </h1>
        <h1 class="text-3xl text-red-800" style="text-transform:uppercase"> <strong> {{ $route.params.slug }}</strong></h1>
    </div>

    <!-- ✅ Grid Section - Starts Here 👇 -->
    <section id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <template v-for="(product, index ) in ProductLists" :key="index">
            <productItem :product="product" />
        </template>


    </section>
</template>



<style scoped ></style>