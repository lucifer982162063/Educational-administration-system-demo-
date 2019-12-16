<template>
  <div id="app">
    <router-view name="header" class='header'/>
    <router-view name="main" class='main'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
body{
  margin:0;
  padding:0;
  background-color: #f6f8fb;
}
</style>
