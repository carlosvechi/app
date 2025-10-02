<template>
  
    <TheHeader v-if="showHeader" />
    <div>
       <h1>Hello World</h1>
       <br>
       <input 
          v-model="name"
          type="text"
        >
        {{ name }} <br>
        <!-- O botão tem uma função showheader, que inicia como ativo. Ele define se o 'header' aparece, ou não. -->
        <!-- Quando ele é ativado, ele passa pelos hooks: beforeCreate(antes de criar), created(criado), beforeMount(antes da montagem) e monted(montado)  -->
        <!-- Ao clicar para desativar o header, ele passa por beforeUnmount(antes de desmontar) e unmounted(desmontado) -->
        <!-- Ou seja, na fase de 'desmontar', ele exclui toda a construção. Ao ativar novamente, ele constroi novamente também. -->
        <button @click="showHeader = !showHeader">
          Ativar e desativar header
        </button>
    </div>
 
  
</template>

<script>

import TheHeader from './components/TheHeader.vue';

export default { 
  name: 'App',
  components: {
    
    TheHeader
  }
  ,
  data() { 
    return {
     name: 'Jon Snow',
     showHeader: true, //componente que adiciona e exclui o header, utilizado no botão
    }
  },

  
  //Criação
    //Preparar o componente
    //Ajax, inicializar algumas variáveis
    //Não tem acesso ao template (DOM)
//Montagem
    //Inicializar um lib externa (new Lib())
    //Precisa de acesso ao template (DOM)
    //Tem acesso ao template (DOM)
//Atualização
    //Debug
    //Update
//Desmontagem
    //Remover tudo o que for necessário
    //para liberar memória

          beforeUpdate() {
          console.log('beforeUpdate', this.name);
        },
        updated() {
          console.log('updated', this.name);
        },

        //HOOKS
        beforeCreate() {
            console.log('beforeCreate');
            console.log('Estado: ', this.name);
            console.log('Dom: ', this.$el)
        },
        created() {
            console.log('created');
            console.log('Estado: ',this.name);
            console.log('Dom: ', this.$el)
        },
        beforeMount() {
            console.log('beforeMount');
            console.log('Estado: ',this.name);
            console.log('Dom: ', this.$el)
        },  
        mounted() {
            console.log('mounted');
            console.log('Estado: ',this.name);
            console.log('Dom: ', this.$el)    
        },

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
