
<template>
    <div class="search-box flex justify-center items-center h-screen ">
        <div class="bg-white p-20 w-[800px] h-[600px] rounded-2xl">
            <label for="search-city" class="block mb-4 text-lg font-medium text-gray-700">Weather</label>
            <div class="search-icon">
                <input type="text" name="search-city" id="city" v-model="searched" @input="fetchCityData" placeholder="Search for a city"
                class="search-input mt-1 w-full py-3 pl-10 rounded-lg text-[#929297] focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-md border border-gray-300 bg-white">
            </div>
            <div class="city-wrapper mt-2 bg-white">
                <ul v-if="searchedCities">
                    <p v-if="error" class="p-4 border rounded-lg">Oops, something went wrong. Try again later.</p>
                    <p v-if="!error && searchedCities.length === 0" class="p-4 border rounded-lg">Coudn't find the city you're looking for.</p>
                    <template v-else>
                        <div class="border rounded-lg overflow-hidden">
                            <li v-for="(city, index) in searchedCities" :key="index" @click="RedirectToSelectedCity(city)" class="p-4 cursor-pointer hover:bg-blue-500 hover:text-white">
                                {{ city.name}}, {{ city.state }}, {{city.country }}
                            </li>
                        </div>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
// import City from './City.vue'
import Search from '../assets/search-icon.png'
import axios from 'axios'
import { ref, watch } from 'vue';
import router from '../router';

const searched = ref('')
const searchedCities = ref(null)
const timeout = ref(null)
const error = ref(false)

const RedirectToSelectedCity = ({name, state, lon, lat}) =>{
    router.push({name: "Weather", query: { city: name, state: state, lon: lon, lat: lat}})
}
const fetchCityData =  () => {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(async () => {
            if(searched.value !== ""){
                try {
                    const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searched.value}&limit=10&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
                    searchedCities.value = response.data
                }
                catch (err) {
                    error.value = true
                }
                return
            }
            searchedCities.value = null
    }, 350)
    return 
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