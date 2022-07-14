<template>
  <li :class="{'active':selected}" @click="$emit('select-customer', id)" id="people">
    {{ fName }} {{ lName }}
  </li>
</template>

<script>
export default {
  props: ["id", "fName", "lName", "selected"],
  emits: ["select-customer"],
  data() {
    return {};
  },
  methods: {
  },
};
</script>


<style>
@import "../assets/app.css";
</style>