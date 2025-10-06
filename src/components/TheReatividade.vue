<template>
<div id="app">
    <h2>Produtos</h2>
    <ul>
        <li v-for="(produto, index) in produtos" :key="index">
            {{ produto.nome }} - R$ {{ produto.preco }}
        </li>
    </ul>
    <button @click="atualizaPreco(1, 15.90)">Atualizar Preço</button>
</div>
</template>

<script>

export default {
    data() {
        return {
            produtos: [
            {nome: 'Macarrão', preco: '10.0'},
            {nome: 'Feijão', preco: '20.0'}
            ]
        }
    },
    methods: {
        atualizaPreco(index, novoPreco) {
            this.produtos[index].preco = novoPreco;
        }
    }
}
</script>

<style>

</style>