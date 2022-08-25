
<template>
    <div class="search-box flex justify-center items-center h-screen ">
        <div class="bg-white p-20 w-[800px] h-[600px] rounded-2xl">
            <label for="search-city" class="block mb-4 text-lg font-medium text-gray-700">Weather</label>
            <div class="search-icon">
                <input type="text" name="search-city" id="first-name" v-model="search" autocomplete="given-name" placeholder="Search for a city"
                class="search-input mt-1 w-full py-3 pl-10 rounded-lg text-[#929297] focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-md border border-gray-300 bg-white">
            </div>
            <City v-if="search" :cities="cities"/> 
        </div>
    </div>
</template>
<script setup>
import City from './City.vue'
import Search from '../assets/search-icon.png'
import axios from 'axios'
import { ref, watchEffect, watch, reactive, computed } from 'vue';

const search = ref('')
const cities = ref(null)
const fetchCityData = async () => {
    if(search.value){
        await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${search.value}&limit=10&appid=${process.env.API_KEY}`)
        .then(result => cities.value = result?.data)
    }
}


</script>
<style>
.search-icon{
    position: relative;
}
.search-icon::before{
    content: url('../assets/search-icon.png');
    position: absolute;
    top:14px;
    left:11px;
    z-index: 10;

}

</style>