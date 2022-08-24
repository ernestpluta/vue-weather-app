
<template>
  <div>
  <search-city/>

  <!-- <hourly-forecast/> -->
  </div>
</template>

<script>
import SearchCity from './components/SearchCity.vue';
import HourlyForecast from './components/HourlyForecast.vue';
export default{
  name: "App",
  components: { SearchCity, HourlyForecast },
  methods: {

  },
}
</script>

<style scoped>

</style>
