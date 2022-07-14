<template>
 
      <div id="top" class="mt-4"> <h2>{{CName}}</h2>
       <div id="actions">
           <button class="btn btn-success">Edit</button>
          <button class="btn btn-danger" @click="deleteCustomer(cID)">Delete</button>
       </div>
      </div>
 <div id="info">
 <div class="data"><span>Customer ID</span> {{cID}}</div>
<div class="data"><span>Email</span>{{cEmail}}</div>
<div class="data"><span>Phone Number</span>{{cPhone}}</div>
<div class="data"><span>Added On</span>{{dateAdded}}</div>
       </div>
</template>

<script>
import axios from "axios";
export default{
       props:['cID','CName','dateAdded','cPhone','cEmail'],
       inject:['selectedCustomer','customers'],
       methods:{
       deleteCustomer(id){
let apiURL=  `http://localhost:8080/customers/delete/${id}`
              
      let indexOfArrayItem = this.customers.findIndex(
        (i) => i.cid === id
      );

      if (window.confirm("Are you sure you want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.customers.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });  
          location.reload()      
       }}
       }
}
</script>

<style>
@import '../assets/app.css';
</style>