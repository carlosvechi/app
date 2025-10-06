<template>
  <div>
    <!-- <h1>Componente pai</h1> -->
    <TheFilho @enviarMensagem="receberMensagem" :mensagem="mensagemDoPai" />
    <p>Mensagem do filho: {{ mensagemFilho }}</p>
  </div>
</template>

<script>

import TheFilho from './components/TheFilho.vue';

export default { 
  name: 'App',
  components: {
    
    TheFilho,
  }
  ,
  data() { 
    return {
      /// \/ abaixo está a mensagem do pai, que vai para o filho
      // mensagemDoPai: 'Olá, do componente pai!',

      //aqui vamos 
      mensagemFilho: ''
    }
  },
  methods: {
    receberMensagem(mensagem) {
      this.mensagemFilho = mensagem;
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  watch: {},
  computed: {},
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
