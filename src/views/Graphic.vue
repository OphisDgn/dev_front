<template>
    <h2>Bienvenue dans les charts !</h2>
    <div class="firstCharts">
        <PlanetChart />
    </div>
    <Footer />
</template>

<script>
import PlanetChart from '../components/PlanetCharts'
import Footer from '../components/Footer'

export default {
    name: "Graphic",
    components: {
        PlanetChart,
        Footer
    }
}
</script>