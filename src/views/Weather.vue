<template>
  <div class="flex max-w-[1440px] mx-auto justify-end items-center">
    <div class="w-2/6">
      <hourly-forecast :weather="weatherData" />
      <ten-day-forecast :TenDayWeatherData="TenDayWeatherData"/>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HourlyForecast from '../components/HourlyForecast.vue'
import TenDayForecast from '../components/TenDayForecast.vue'
import axios from 'axios';
import { watchEffect, watch, ref, reactive } from 'vue';
const route = useRoute()
const cityData = reactive({
    city: route.query.lat,
    state: route.query.state,
    lat: route.query.lat,
    lon: route.query.lon
})
const weatherData = ref({})
const TenDayWeatherData = ref({})
console.log(route.query.lat)
const fetchWeatherData = async () => {
  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&type=hour&appid=${process.env.API_KEY}`).then((result) => weatherData.value = result?.data.list)
}

  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
    params: {lat: cityData.lat, lon: cityData.lon, units: 'metric'},
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY_2,
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  const fetchCurrentWeatherData = async () => {
    await axios.request(options).then(result => {
      TenDayWeatherData.value = result?.data.data
      console.log(result.data.data)
    })
  }
      watchEffect(() => {
        fetchWeatherData()
        fetchCurrentWeatherData()
    })
</script>

<style>

</style>