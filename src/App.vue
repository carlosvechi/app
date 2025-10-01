<template>
  
    <TheHeader v-if="showHeader" />
 
  <div v-show="showName"> 
    Nome: {{ firstName }} <br>
    Sobrenome: {{ lastName }}
  </div>

  <!-- condicionais. Nesse exemplo, se a varíavel 'acessLevel', que veio de 'data' for admin, marketing ou qlq outra coisa, ele retorna os respectivos textos -->
  <div v-if="acessLevel === 'admin'">Admin</div> 
  <div v-else-if="acessLevel === 'marketing'">Marketing</div>

  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>   -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' //importando
import TheHeader from './components/TheHeader.vue';

export default { //objeto que contém os atributos do componente
  name: 'App',
  components: {
    // HelloWorld, //declarando 
    TheHeader
  }
  ,
  data() { //função que vai retornar objetos
    return {
      showHeader: true,
      firstName: 'Jon',
      lastName: 'Snow',
      showName: false,
      acessLevel: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
