<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(666);
    this.$router.push("/index");
  },
};
</script>

<style>
html {
}
body {
  min-width: 23.4375rem;
  background: #fff;
}
.warp {
}
</style>
