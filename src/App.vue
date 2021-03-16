<template>
  <header>
    <div id="nav">
      <router-link to="/">Accueil</router-link> --
      <router-link to="/about">About</router-link> --
      <router-link to="/geographic">Geographic view</router-link> --
      <router-link to="/graphic">Graphic</router-link>
    </div>
  </header>
  <router-view/>
</template>

<style>
header {
  background: #75534d;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smooth: './components/NavLink.vue';
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
