<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import peoplesData from '../assets/peoples.js'

export default {
  name: 'PlanetChart',
  data() {
      return {
          peoplesData: peoplesData
      }
  },
  mounted() {
      const ctx = document.getElementById('planet-chart');
      new Chart(ctx, this.peoplesData);
  }
}
</script>