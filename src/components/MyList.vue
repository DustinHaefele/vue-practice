<template>
  <div class="hello">
    <!-- v-bind allows you to use data within a component where you can't use {{}}  -->
    <h1 v-bind:title="msg" >Hover over me to see this message</h1>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      msg: "this is from data"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
