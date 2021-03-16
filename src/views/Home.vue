<template>
  <div class="homeContain">
    <List />
	</div>
  <Footer />
</template>

<script>
//import NavLink from "../components/NavLink.vue"
import List from "./List.vue"
import Footer from "../components/Footer.vue"

export default {
	name: "Home",
	components: {
    List,
    Footer
	}
}
</script>
<style>
body {
  margin: 0px;
}
</style>