<template>
    <div class="theapp_container ">
      <navsection></navsection>
      <programsection></programsection>
    </div>
   
</template>

<script>

import navsection from './/navsection.vue'
import programsection from './programsection.vue'

export default {
    name: 'App',
    components: {
        navsection,
        programsection,
        
    }

}


</script>

<style>
.theapp_container {
    background-color: #111C30;
    width: 100vw;
    height: 100vh;
}
</style>

