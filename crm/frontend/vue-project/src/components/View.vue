
<template>
     <div class="wrapper">

<div >

<div id="details">
   <about></about>
</div>
</div>
 </div>
   
</template>

<script>
    import axios from 'axios'
import about from "./about.vue"

    export default{
       data(){}, 
       props:{
selected:{type:Boolean,default:false}
       },
          components:{
        about,
     
    }
    
    }
</script>
<style>
@import '../assets/app.css';
</style>