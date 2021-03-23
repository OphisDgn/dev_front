<template>
  <div class="about">
    <p>Sélectionner la personne à modifier selon son nom de famille</p>
    <div class="divSelect">
      <select >
        <option v-for="option in options" :key="option.value">
          {{ option.lastname }}
        </option>
      </select>
    </div>
    <div class="selectResult">
      
    </div>
  </div>
  <Footer/>
</template>


<script>
import Footer from '../components/Footer'
export default {
  name: 'About',
  data() {
    return {
      options: []
    }
  },
  components: {
    Footer
  },
  mounted() {
    fetch("https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7")
    .then(response => response.json())
    .then(data => {
      this.options = data.people;
    })
  }
}
</script>

<style scoped>
.about {
  margin: 30px 10px;
}
.about p {
  font-size: 16px;
}

.divSelect select {
  width: 250px;
  height: 40px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
}
</style>
