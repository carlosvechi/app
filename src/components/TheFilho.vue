<template>
    <!-- Reproduz a mensagem que veio do App.vue (através do props)
   <h2>Componente filho</h2>
   <p>Mensagem receida: {{ mensagem }}</p> -->

   <!-- Aqui vemos o contrario: filho(TheFilho) recebe a mensagem do pai(App) -->
   <div>
    <h2>Componente Filho</h2>
    <button @click="enviarMensagem">Enviar</button>
   </div>
</template>

<script>
export default {
    //é utilizado props para acessar a mensagem vinda do componente Pai (App.vue)
    props: ['mensagem'],
    methods: {
        enviarMensagem() {
            this.$emit('enviarMensagem', 'Olá, do componente filho!')
        }
    }
}
</script>

<style>

</style>