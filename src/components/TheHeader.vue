<template>
    <div class="card" id="app">
        <h2>Lista de compras</h2>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <button @click="removerItem(index)">Remover</button>
            </li>
        </ul>
        <input v-model="novoItem" @keyup.enter="adicionarItem()" @keyup.esc="limpar()" placeholder="Adicionar Item">
        <button @click="adicionarItem">Adicionar</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            todos: ['Macarrão', 'Banana', 'Feijão'],
            novoItem: '',
            texto: '',
        }
    },
    methods: {
        adicionarItem() {
            if(this.novoItem.trim() !=='') {
                this.todos.push(this.novoItem);
                this.novoItem = '';
            }
        },
        removerItem(index) {
            this.todos.splice(index, 1);
        },
        
        limpar() {
            this.novoItem = '';
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

h1,
h2 {
    color: #f0e68c;
}

.header {
    background: #000;
    color: #fff;
}
</style>