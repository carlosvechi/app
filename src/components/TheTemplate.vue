
<script setup>

import TheColuna from './TheColuna.vue';
import TheCard from './TheCard.vue';

</script>


<template>
    <!-- d-flex mantém os itens alinhado na horizontal -->
    <div class="d-flex overflow-x-auto">

        <!-- define o 'card principal'. Os cards menores, ficarão dentro dele. -->
        <div class="colunas">
            <TheColuna />

            <!-- corpo dos cards menores -->
            <TheCard />
            <TheCard />

        </div>

        <div class="colunas">
            <TheColuna />

            <!-- corpo dos cards menores -->
            <TheCard />

        </div>

        <div class="colunas">
            <TheColuna />

            <!-- corpo dos cards menores -->
            <TheCard />

        </div>

        <div class="colunas">
            <TheColuna />

            <!-- corpo dos cards menores -->
            <TheCard />

        </div>

        <div class="colunas">
            <TheColuna />

            <!-- corpo dos cards menores -->
            <TheCard />

        </div>

    </div>
</template>

<style>
.colunas {
    height: fit-content;
    min-width: 300px;
    min-height: 100vh;
    margin: 19px 10px 10px 10px;
    max-width: 300px;
    background-color: #e5e5e7;
    border-radius: 4px;
}

</style>