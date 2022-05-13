
<template>
     <div class="wrapper">

<div class="container">
<form>
    <div id="people">
        <ul><li v-for="customer in customers" :key="customer._id">{{customer.fName}} {{customer.lName}}</li>
        
        </ul>
    </div>
</form>
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
        data(){
            return{
                customers:[]
            }
        },
          components:{
        about
    }
    ,
    created(){
 let apiURL = `http://localhost:8080/customers/all`;
   axios.get(apiURL).then((res)=>{
       this.customers=res.data
   }).catch((error)=>{
       console.log(error);
   })
   
   }
    }
</script>
<style>
@import '../assets/app.css';
</style>