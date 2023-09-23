<template>

    <div class="thehole_app">
     <div class="theapp_container ">
      <navsection></navsection>
      <programsection></programsection>
      <footercontainer></footercontainer>
    </div>
    </div>
   
   
</template>

<script>

import navsection from './navsection.vue'
import programsection from './programsection.vue'
import footercontainer from "./footercontainer.vue"

export default {
    name: 'App',
    components: {
        navsection,
        programsection,
        footercontainer,
    }

}


</script>

<style>
.theapp_container {
    background-color: #111C30;
    width: 100vw;
    height: 65vh;
 
}
</style>

