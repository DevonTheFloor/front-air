<template>
  <div>
    <header>
        <h1>Air-Web MarketPLace</h1>
        <img alt="Vue logo" src="../assets/logo.png">
    </header>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'

}
</script>

<style scoped>
  header {
    border: 1 px solid red;
  }
  header h1 {
    margin-right: 1%;
    display: inline;
    color: rgb(22, 141, 22);
  }
  header img {
    width: 40px;
  }
</style>