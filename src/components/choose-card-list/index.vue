<template>
  <div class="chooselist">
    <div
      class="chooselist-item"
      v-for="item in listData"
      v-bind:key="item.desc"
    >
      <choose-card-item
        :imgSrc="item.imgSrc"
        :desc="item.desc"
        @handleMake="handleMake"
      ></choose-card-item>
    </div>
  </div>
</template>
<script>
import chooseCardItem from ".././choose-card-item/index";
export default {
  name: "chooseCardList",
  components: {
    chooseCardItem,
  },
  props: {
    listData: {
      type: Array,
      default: function () {
        return [
          {
            imgSrc: "",
            desc: "",
          },
        ];
      },
    },
  },
  methods: {
    handleMake(e) {
      this.$emit("handleMake", e);
    },
  },
};
</script>

<style lang='scss'>
.chooselist {
  text-align: center;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: auto;
}
.chooselist-item {
  display: inline-block;
  margin: 2rem 1.25rem;
  white-space: nowrap;
}
</style>