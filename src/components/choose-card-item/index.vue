<template>
  <div class="chooseCard">
    <img class="chooseCard-img" :src="imgSrc" />

    <div
      class="chooseCard-btn"
      :data-desc="imgSrc"
      @click="clickHandle($event)"
    >
      <slot>开始制作</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "chooseCardItem",
  props: {
    imgSrc: {},
    desc: {},
  },
  methods: {
    clickHandle(e) {
      this.$emit("handleMake", e.target.dataset.desc);
    },
  },
};
</script>
<style lang="scss">
.chooseCard {
  position: relative;
  width: 15.625rem;
  height: 16.875rem;
  background: rgba(33, 33, 33, 1);
  border-radius: 0.5rem;
  box-shadow: 0.0625rem 0.125rem 0.1875rem 0.0625rem darkgray;
}
.chooseCard-img {
  position: absolute;
  width: 9.375rem;
  height: 9.375rem;
  top: 50%;
  left: 50%;
  padding: 0.1563rem;
  transform: translate(-4.6875rem, -4.6875rem);
}
.chooseCard-btn {
  display: block;
  position: absolute;
  height: 3rem;
  width: 8.75rem;
  border-radius: 1.5rem;
  bottom: -1.5rem;
  left: 3.8125rem;
  color: azure;
  font-size: 1rem;
  text-align: center;
  line-height: 3rem;
  background: linear-gradient(
    45deg,
    rgba(255, 10, 10, 1) 0%,
    rgba(200, 10, 25, 1) 100%
  );
}
</style>