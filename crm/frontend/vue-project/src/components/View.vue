
<template>
     <div class="wrapper">

<div class="container">

 <customerPicker></customerPicker>


<div id="details">
   <about></about>
</div>
</div>
 </div>
   
</template>

<script>
    import axios from 'axios'
import about from "./about.vue"
import customerPicker from "./customer-picker.vue"
    export default{
       data(){}, 
       props:{
selected:{type:Boolean,default:false}
       },
          components:{
        about,
        customerPicker
    }
    
    }
</script>
<style>
@import '../assets/app.css';
</style>