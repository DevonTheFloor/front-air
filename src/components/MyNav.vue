<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link> 
      </li>
      <li>
        <router-link to="/notre-catalogue">Notre Catalogue</router-link> 
      </li>
      <li>
        <router-link to="/votre-panier">Votre Panier</router-link> 
      </li>
      <li>
        <router-link to="/login">Login</router-link> 
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
#nav ul li {
  margin: 5px;
  margin: auto;

}
</style>
