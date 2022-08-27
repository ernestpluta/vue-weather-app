<template>
<div></div>
    <!-- <div class="text-5xl text-center">temp</div> -->
    <!-- <div v-for="(dailyWeather, index) in currentWeather" :key="index">
    {{dailyWeather}}
    </div> -->
</template>


<script setup>
import axios from 'axios';
const props = defineProps({
    weather: Object,
    currentWeather:Object
})
// console.log(props.weather)

</script>

<style scoped></style>