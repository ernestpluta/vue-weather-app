<template>
  <div class="flex max-w-[1440px] mx-auto justify-end items-center">
    <div class="w-2/6">
      <hourly-forecast :weather="weatherData" />
      <ten-day-forecast :TenDayWeatherData="TenDayWeatherData" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HourlyForecast from '../components/HourlyForecast.vue';
import TenDayForecast from '../components/TenDayForecast.vue';
import axios from 'axios';
import { watchEffect, watch, ref, reactive } from 'vue';

const route = useRoute();
const cityData = reactive({
  city: route.query.lat,
  state: route.query.state,
  lat: route.query.lat,
  lon: route.query.lon,
});

const weatherData = ref({});
const TenDayWeatherData = ref({});
const errorOpenWeather = ref(null);
const errorWeatherBit = ref(null)

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
  params: { lat: cityData.lat, lon: cityData.lon, units: 'metric' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDKEY_API,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDKEY_HOST,
  },
};

const fetchWeatherData = async () => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&type=hour
    &appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`);
    weatherData.value = response.data.list;
  } catch (err) {
    errorOpenWeather.value = true;
  }
};
const fetchCurrentWeatherData = async () => {
  try{
    const response = await axios.request(options)
    TenDayWeatherData.value = response.data.data
  }
  catch(err){
    errorWeatherBit.value = true
  }
};
watchEffect(() => {
  fetchWeatherData();
  fetchCurrentWeatherData()
});
</script>

<style></style>
