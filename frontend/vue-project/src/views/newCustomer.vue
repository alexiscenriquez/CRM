<template>
  <h1 class="mt-4">Add a New Customer</h1>
  <div id="wrapper">
    <form class="mt-4 customer" @submit.prevent="addCustomer">
      <fieldset class="form-control">
        <div class="mb-3">
          <div class="col mb-3">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="customers.fName" />
          </div>
          <div class="col mb-3">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="customers.lName" />
          </div>
          <div class="col mb-3">
            <label for="">Phone</label>
            <input
              type="tel"
              class="form-control"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="xxx-xxx-xxxx"
              v-model="customers.phone"
            />
          </div>
          <div class="col mb-3">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model="customers.email"
            />
          </div>
        </div>
        <div class="form-actions"><button class="btn">Add</button> <a href="/" class="btn btn-danger">Cancel</a></div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      customers: {
        cid: "",
        fName: "",
        lName: "",
        phone: "",
        email: "",
        dateAdded: undefined,
      },
    };
  },

  methods: {
    addCustomer() {
      let apiURL = "http://localhost:8080/customers/add-customer";
      axios
        .post(apiURL, this.customers)
        .then(() => {
          this.$router.push("/");
          this.customers = {
            cid: "",
            fName: "",
            lName: "",
            phone: "",
            email: "",
            dateAdded: "",
          };
        })
        .catch((error) => {
          this.errors.push("Error in form submission. " + error.response.data);
          console.log(error);
        });
    },
  },
};
</script>
