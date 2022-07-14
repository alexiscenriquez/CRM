<template>
  <ul class="list">
    <customer-picker-item v-for="customer in customers" :key="customer.id" :id="customer.cid" :fName="customer.fName" :lName="customer.lName" @select-customer="$emit('select-customer',$event)" :selected="customer.fName===customerFName" ></customer-picker-item>
  </ul>
</template>
<script>
export default{
  props:['customers','selectedCustomer','selected','customerFName'],
 emits:['select-customer']
}
</script>