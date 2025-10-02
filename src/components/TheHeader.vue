<template>
    Headerr
</template>

<script>

    export default { 
        name: 'App', 
        data() {
            return {
               name: 'Jon Snow'
            }
        },

         beforeUnmount() {
            //destrói as nossas libs, eventos, listeners
            console.log('BeforeUnmount');
        },
        unmounted() {
            console.log('unmounted');
        },
        mounted() {
           window.addEventListener('resize', this.resize)  
        },
       
        watch: {

        },

        computed: {

        },

        methods: {
          resize($evt) {
            console.log($evt)
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