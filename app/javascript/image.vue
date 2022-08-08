<template>
  <div id="app">
    test
    <p>{{ message }}</p>
    <div>
      <img :src="require('images/boltops.png')" />
      <img :src="imagePath('./minion.png')" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
