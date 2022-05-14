<template>
  <form v-cloak>
    <ul id="list">
   
          <li v-for="customer in customers" :key="customer._id"  v-bind:class= "{active:customer.selected}" @click="select(customer),sendMsg(customer)" id="people" >
            {{ customer.fName }} {{ customer.lName }}
          </li>
   
    </ul>
  </form>
</template>

<script>
import axios from "axios";
import {eventBus} from "../eventBus" 
export default {
  data() {
    return {
      customers: [],
      selected:false
    }
  },
  methods: {
   select:function(s){
       let customers=this.customers
  for(let customer in customers){
      customers[customer].selected=false
 }
  s.selected=true
   },
   sendMsg:function(c){
       console.log(c)
//this.$root.$emit("message",c)
   }
   
  },
  created() {
    let apiURL = `http://localhost:8080/customers/all`;
    axios
      .get(apiURL)
      .then((res) => {
        this.customers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style>
@import '../assets/app.css';
</style>