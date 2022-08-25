<template>
  <div>siema</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { watchEffect, watch, ref } from 'vue';
const route = useRoute()
const cityData = ref({
    city: route.query.lat,
    state: route.query.state,
    lat: route.query.lat,
    lon: route.query.lon
})
console.log(route.query.lat)
const fetchWeatherData = async () => {
  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.value.lat}&lon=${cityData.value.lon}&appid=${process.env.API_KEY}`).then((result) => console.log(result.data.list))
}
      watch(() => {
        fetchWeatherData()
    })
</script>

<style>

</style>