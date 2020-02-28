<template>
  <div class="hello">
    <!-- v-bind allows you to use data within a component where you can't use {{}}  -->
    <h1 v-bind:title="msg" v-show="showing">Hover over me to see this message</h1>
    <ul>
      <li v-bind:key="idx" v-for="(cand, idx) in candidates">
        {{cand.name}}
        <button v-on:click="removeCandidate(idx)">remove</button>
      </li>
    </ul>

      <input v-model="newCand" />
      <button v-on:click="addCandidate()" type='submit'>add Candidate</button>

  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      msg: "Uncle Bernard",
      newCand: "",
      showing: true,
      candidates: [
        { name: "Biden" },
        { name: "Trump" },
        { name: "Uncle Bernie" },
        { name: "Liz Warren" },
        { name: "Andrew Yang" }
      ]
    };
  },
  methods: {
    addCandidate: function() {
      if(this.newCand.length > 0) {
      this.candidates.push({ name: this.newCand });
      }
    },

    removeCandidate: function(idx) {
      this.candidates = this.candidates.filter(function(cand, index) {
        return index !== idx;
      });
    }
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
