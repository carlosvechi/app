<template>
    <div>
        <!-- um v-model padrão que reproduz o que foi escrito no campo input -->
        <input 
            type="text"
            v-model="name"
            > <br>
           <p :style="{ color: 'red'}">{{ name }}</p>

           <br><br><br>

        <!-- reproduz no template o primeiro nome, e o segundo. Ambos vindo do campo input -->
        <input 
            v-model="user.first_name"
            type="text"
            > <br>

        <input 
            v-model="user.last_name"
            type="text"
            > <br>
            <p :style="{color: 'red'}"> {{ user.first_name }} {{ user.last_name }}</p>

        <!-- v-model para o escolhido no option do select -->
        <select v-model="pageCount" >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        </select> <br>
        {{ pageCount }}
    </div>
</template>

<script>

    export default { 
        name: 'App', 
        data() {
            return {
                //dados do data sendo iniciados
                name: '',
                pageCount: 5,
                user: {
                    first_name: '',
                    last_name: ''
                }
            }
        },

        //O watch serve para observar mudanças em uma variavél e executar uma ação automaticamente quando esse valor mudar
        //serve para validar input, fazer uma requisição API, atualizar outra variavél automat. e sincronizar dados
        watch: {
            name(vl) { //vai executar o método 'saveUserName' toda vez que vl >= 3. vl é a qnt de caracteres digitado no input
              if (vl.length >= 3) {
                this.saveUserName();
              }
            },
        pageCount() { //executa o método changePage
            this.changePage();
        },
        user: { //a lógica aqui é fazer o watch visualiazar mais profundamente, pois o input ele altera somente this.first_name e this.last_name
            handler() { //então, ele não altera o user em si, mas seus 'atributos'. E para fazer ele enxergar, devemos utilizar 'deep' e handler vai exec a função
                console.log('User alterado');
            },
            deep: true
        }

        },

        computed: {

        },

        methods: {
            saveUserName() { //método chamado no watch name
                console.log('Ajax');
                console.log(this.name);
            },
            changePage() { //método chamado no watch pageCount
                console.log('Ajax changePage');
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

h1, h2 {
    color: #f0e68c;
}

</style>