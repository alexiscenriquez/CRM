

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div><a class="navbar-brand" href="/">CRM</a></div>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link"><router-link :to="{name:'newcustomer'}">New Customer</router-link></a></li>
        </ul>
      </div>
    </nav>
  </div>

    <RouterView></RouterView>
</template>

<style>
@import "./assets/base.css";
@import "./assets/app.css";
</style>
