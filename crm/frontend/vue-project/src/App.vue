<script>
import View from "./components/View.vue";

import axios from "axios";
import customerPicker from "./components/customer-picker.vue";
import About from "./components/about.vue";
export default {
  components: { customerPicker, About },
  data() {
    return {
      customers: [],
      selectedCustomer: null,
      cID: "",
      customerName: "",
      customerFName: "",
      customerLName: "",
      dateAdded: "",
      cEmail: "",
      cPhone: "",
      selected: false,
    };
  },
  provide() {
    return {
      selectedCustomer: this.selectedCustomer,
      customers: this.customers,
    };
  },
  methods: {
    activateCustomer(customerId) {
      this.selectedCustomer = this.customers.find(
        (customer) => customer.cid === customerId
      );
      this.customerName = `${this.selectedCustomer.fName} ${this.selectedCustomer.lName}`;
      this.customerFName = this.selectedCustomer.fName;
      this.cID = this.selectedCustomer.cid;
      this.cPhone = this.selectedCustomer.phone;
      this.cEmail = this.selectedCustomer.email;
      this.dateAdded = this.selectedCustomer.dateAdded.slice(0, 10);
    },
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

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div><a class="navbar-brand" href="/">CRM</a></div>
        <ul class="navbar-nav">
          <li class="nav-item"><a href="" class="nav-link">New Customer</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="wrapper">
    <div class="empty-arr" v-if="customers.length == 0">
      <p>No Customers Found</p>
      <button class="btn btn-success mt-3">Add Customer</button>
    </div>
    <div class="container" v-else>
      <customer-picker
        @select-customer="activateCustomer"
        :customers="customers"
        :selectedCustomer="selectedCustomer"
        :customerFName="customerFName"
      ></customer-picker>

      <div class="details">
        <about
          v-if="selectedCustomer"
          :CName="customerName"
          :cID="cID"
          :cEmail="cEmail"
          :cPhone="cPhone"
          :dateAdded="dateAdded"
        ></about>
        <div v-else class="no-choice">Select a Customer</div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";
@import "./assets/app.css";
</style>
