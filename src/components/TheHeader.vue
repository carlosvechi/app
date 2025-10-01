<template>
    <div>
        <!-- v-on é uma diretiva utilizada para capturar eventos do DOM (como click, input, teclas) e executar uma ação. -->
         <!-- Resumindo: serve para capturar ações do usuário e reagir a elas. No formato abreviado, utiliza-se @ -->
        <button @click="onClick">
            Enviar
        </button>

        <br><br>

        <!-- esse exemplo retorna toda vez que o mouse é passado em cima de 'mouse over' e também quando é tirado -->
        <div @mouseover="onMouseOver"
            @mouseout="onMouseOut"
        >
            Mouse over
        </div>

        <br><br>

        <!-- o botão direciona para o google, porém, o prevent impede que isso aconteça -->
        <form action="https://google.com"
                @submit.prevent="onSubmit"
            >
            <!-- captura o que for digitado no campo input, mas somente após apertar a tecla enter -->
            <input type="text"
                    @keyup.enter="onKeyUp"
            >
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
    export default { 
        name: 'App', 
        data() {
            return {
                
            }
        },

        methods: { //$evt conterá todas as informações sobre o que aconteceu: elemento disparado, tecla pressionada, coordenadas de clique etc
            onClick($evt) {
                console.log('click', $evt);
            },
            onMouseOver($evt) {
                console.log('mouse over', $evt)
            },
            onMouseOut($evt) {
                console.log('mouse out', $evt)
            },
            onSubmit($evt) {
                console.log('submit', $evt)
            },
            onKeyUp($evt) {
                console.log('onKeyUp', $evt)
            }
        }
    }
</script>

<style>

    body {
        background-color: #000000;
    }
   .app {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #b8ad70;
    margin: 60px;
}

</style>