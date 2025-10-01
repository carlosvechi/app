<template>
   <div>

    <!-- aplicando style dinâmico, conforme a resposta de 'isHome' que vai retornar true ou false, e após isso, o style será aplicado -->
    <h1 :class="{ 'title': true, 'title-home': isHome }">
        Curso Vue 3
    </h1>

    <!-- style aplicado através de um array -->
    <p :class="pClass">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia optio dignissimos maxime. Illum possimus delectus quam quasi veniam sapiente tempora nulla voluptatibus sequi? Doloribus accusamus deleniti laborum ex temporibus?
    </p>

    <!-- style aplicado através de um objeto -->
    <p :style="styleClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis eaque saepe nesciunt quisquam, laudantium, quaerat, voluptas adipisci molestiae explicabo eos voluptatibus itaque dignissimos nostrum consequuntur! Unde quo consectetur corrupti?
    </p>

    <!-- um laço de repetição v-for, onde obj (obj também será o objeto para instanciar) e index são os parâmetros do loop, e todos é o nome da array a ser percorrida.   -->
    <div v-for="(obj, index) in todos"
        :key="obj.id"
         class="todos-item"
    >
    <img    v-if="obj.imgSrc" 
           :src="obj.imgSrc">

        {{ index }} - {{ obj.title }}
    </div>


   </div>
</template>

<script>
    export default { //aqui estará todas as propriedades dos componentes
        name: 'App', 
        data() {
            return {
               
                isHome: false,
                classVar: "title",
                pClass: ['text', 'text-home'],
                styleClass: { 'color': 'aqua', 'background-color': 'black' },
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
        }
    }
</script>

<style>
    .todos-item {
        background: #000;
        margin: 0 0 5px 0;
        padding: 3px 6px;
        color: #fff;
    }

   #app {
        font-family: Avenir, Helvetica, Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 50px;
   }

   .title {
    font-family: 'Courier New', Courier, monospace;
    color: blue;
   }
   .title-home {
    font-size: 40px;
    color: green;
   }
   
   .text {
    color: rgb(175, 175, 5);
   }

   .text-home {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   }
</style>