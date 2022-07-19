<template>
      <div class="wrapper">
    <div class="empty-arr" v-if="customers.length == 0">
      <p>No Customers Found</p>
      <a class="btn btn-success mt-3"><router-link :to="{name:'newcustomer'}">Add Customer</router-link></a>
    </div>
 <div v-else class="c1">
        <div class="container">
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
         <a class="btn mt-3" id="add"><router-link :to="{name:'newcustomer'}">Add Customer</router-link></a>
 </div>
  </div>
</template>
<script>
import axios from "axios";
import customerPicker from "../components/customer-picker.vue";
import About from "../components/about.vue";
export default{
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
    let apiURL = `https://customermgmt.herokuapp.com/customers/all`;
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