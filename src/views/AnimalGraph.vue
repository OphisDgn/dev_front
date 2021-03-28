<template>
    <h2>Bienvenue dans les charts !</h2>
    <div class="pieContainer">
        <canvas id="animalChart" width="300px" height="200px"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    data () {
        return {
        }
    },
    mounted () {
       new Chart(document.getElementById('animalChart').getContext('2d'), {
           type: 'pie',
           datasets: {
                labels: ["Chat", "Chien", "Rat", "Oiseau"],
                data: [28, 23, 22, 27]
            }
       })
    }
}
</script>