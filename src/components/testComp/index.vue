<template>
  <div>
    {{helloMessage}}
    <br>
    <input type="text" v-model="helloMessage">
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  data () {
    return {
      helloMessage: 'ene ni component ashiglaad oruulj bga xelberiig batlax message yma',
    }
  }
}
</script>

<style scoped>

</style>
