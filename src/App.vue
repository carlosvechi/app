<template>
  <div class="">
    <div><TheHeader /></div>
    <div><TheTemplate /> </div>
    <div><TheFooter /></div>
  </div>
</template> 

<script>

import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheTemplate from './components/TheTemplate.vue';

export default { 
  name: 'App',
  components: {
    
    TheHeader,
    TheFooter,
    TheTemplate,
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
  background-color: rgb(158, 158, 158) !important;
}

.container {
 

}
</style>
