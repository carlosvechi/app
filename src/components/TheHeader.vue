<template>
    <div>
        {{ fullName }}  <br><br>

        <!-- v-for para percorrer o array 'todos' (apelidado de todo aqui) com um filtro (dentro de computed). esse vai retornar apenas os 'completed' = false, ou seja, todos em aberto -->
        <h2>Todos em aberto</h2>
        <div v-for="todo in uncompletedTodos"
            :key="todo.id"        
        >
        {{ todo.title }} 
            
        </div>

        <!-- Aqui segue a mesma lógica, porém, vai retornar as todos completas. E além de retornar o título, retorna o 'completed', ou seja, adiciona um true. -->
        <h2>Todos completas</h2>
         <div v-for="todo in completedTodos"
            :key="todo.id"        
        >

        {{ todo.title }} <span>{{ todo.completed }}</span>
            
        </div>
        <br><br><br>

        <!-- Aqui é a mágica do v-model. Vai criar um checkbox do array todos completo. Ao selecionar um checkbox,  -->
        <!-- altera o valor de 'completed' para 'true', alterando a lista do template. Ou seja, inicialmente, -->
        <!-- Apenas o array 4 é true, mas o checkbox + v-model criam a ligação em duas direções, onde é alterado o valor de 'completed' no próprio checkbox -->
        <h2>Todos</h2>
         <div v-for="todo in todos"
            :key="todo.id"        
        >
        <input 
            v-model="todo.completed"
            type="checkbox"
            
        >
        {{ todo.title }} 
            
        </div>


    </div>
</template>

<script>

    export default { 
        name: 'App', 
        data() {
            return {
                user: {
                    first_name: 'Jon',
                    last_name: 'Snow'
                },
                 todos: [
                        {
                            "userId": 1,
                            "id": 1,
                            "title": "delectus aut autem",
                            "completed": false,
                            "imgSrc": 'https://placehold.jp/150x150.png'
                        },
                        {
                            "userId": 1,
                            "id": 2,
                            "title": "quis ut nam facilis et officia qui",
                            "completed": false,
                            "imgSrc": 'https://placehold.jp/150x150.png'
                        },
                        {
                            "userId": 1,
                            "id": 3,
                            "title": "fugiat veniam minus",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 4,
                            "title": "et porro tempora",
                            "completed": true
                        },
                        {
                            "userId": 1,
                            "id": 5,
                            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                            "completed": false
                        }
                ]
            }
        },

        computed: {
            fullName() {
                return `${this.user.first_name} ${this.user.last_name}` //computed precisa usar um 'this' para instanciar um objeto no data
            },

            uncompletedTodos() {
                return  this.todos.filter(todo => !todo.completed);
                
            },
            completedTodos() {
                return this.todos.filter(todo => todo.completed);
            },
        },

        methods: {
            
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