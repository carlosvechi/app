<template>
  
    <div>
        <div :class="format">
            One-way data binding <br>
            Two-way data binding <br>
            v-model -> formulários
        </div>

        <br>
        <br>

        <div>
            <!-- retorna o nome digitado pelo usuário no campo input, nesse caso, o nome -->
            <label for="">Nome</label> <br>
            <input v-model="name"      
                    type="text"
            > <br>

            {{ name }}
        </div>
    </div>

    <br> <br>

    <div>
        <!-- cria um select, onde é retornado a escolha do usuário, entre as opções. Obs: se inicializar no data com algum valor, essa opção ficara pré selecionada -->
        <label :class="format">Sports</label> <br>
        <select v-model="sports">
            <option value="">Escolha</option>
            <option value="futebol">Futebol</option>
            <option value="skate">Skate</option>
            <option value="tenis">Tenis</option>
        </select> <br>
        {{ sports }}
    </div>

    <!-- Retorna o campo selecionado no checkbox sim/não -->
    <div>
        <label>Newsletter</label> <br>
        <input 
            v-model="newsletter"
            type="radio"
            value="Sim"
            > Sim

        <input 
            v-model="newsletter"
            type="radio"
            value="Não"
            > Não <br> <br>
            {{ newsletter }}
    </div>

    <!-- retorna true/false, dependendo da escolha do usuário -->
     <div>
        <label>Contrato</label> <br>
        <input 
            v-model="contract"
            type="checkbox"
            value="Sim"
            > Aceita nossos termos... <br>

            {{ contract }}
    </div>

    <br><br>

    <!-- Aqui é um checkbox para múltiplas escolhas. A diferença no data, é que ele será um array e retornará as opções marcadas -->
     <div>
        <label>Cores que você mais gosta</label> <br>
        <input 
            v-model="colors"
            type="checkbox"
            value="Azul"
            > Azul

        <input 
            v-model="colors"
            type="checkbox"
            value="Amarelo"
            > Amarelo <br> <br>
            {{ colors }}
    </div>

</template>

<script>
    export default { 
        name: 'App', 
        data() {
            return {
                name: 'Jon Snow',
                format: 'app',
                sports: '',
                newsletter: '',
                contract: false,
                colors: []
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