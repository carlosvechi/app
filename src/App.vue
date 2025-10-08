<template>
  <div class="">
    <div><TheHeader /></div>
    <div><TheTemplate /> </div>
    <div><TheModal /></div>
    <div><TheFooter /></div>
  </div>
</template> 

<script>

import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheTemplate from './components/TheTemplate.vue';
import TheModal from './components/TheModal.vue';

export default { 
  name: 'App',
  components: {
    
    TheHeader,
    TheFooter,
    TheTemplate,
    TheModal,
  }
  ,
  data() { 
    return {
      
    }
  }
  
}
</script>

<style>
body{
  background-color: rgb(153, 153, 153) !important;
}

</style>
