<template>
 
      <div id="top" class="mt-4"> <h2>{{CName}}</h2>
       <div id="actions">
           <button class="btn btn-success">Edit</button>
          <button class="btn btn-danger">Delete</button>
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
export default{
       props:['cID','CName','dateAdded','cPhone','cEmail'],
       inject:['selectedCustomer']
}
</script>

<style>
@import '../assets/app.css';
</style>