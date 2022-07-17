<template>
  <h1 class="mt-4">Edit Customer</h1>
  <div id="wrapper">
    <form class="mt-4 customer" @submit.prevent="editCustomer">
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
        <div class="form-actions"><button class="btn">Edit</button> <a href="/" class="btn btn-danger">Cancel</a></div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import axios from "axios"
export default{
    
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
  created(){
let apiURL=`http://localhost:8080/customers/find/${this.$route.params.id}`
axios.get(apiURL).then((res)=>{
    this.customers=res.data[0]
})
},
  methods:{
    editCustomer(){
        let APIURL=`http://localhost:8080/customers/update/${this.$route.params.id}`
        axios.put(APIURL,this.customers)
        .then((res)=>{
            console.log(res);
            this.$router.push("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
  }
}
</script>