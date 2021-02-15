<template>
  <div class="warp">
    <img class="nav" src="@/assets/image/nav.png" />
    <choose-card-list
      :listData="listData"
      @handleMake="handleMake"
    ></choose-card-list>
    <vue-img-cropper
      ref="cropper"
      :height="800"
      :width="800"
      @cutImg="handleCutImg"
    >
    </vue-img-cropper>
    <img class="foot" src="@/assets/image/foot.png" />
  </div>
</template>
<script>
import chooseCardList from "../../components/choose-card-list/index";
export default {
  components: {
    chooseCardList,
  },
  data() {
    return {
      listData: [
        {
          imgSrc: require("@/assets/image/pic1.png"),
          desc: "pic1",
        },
        {
          imgSrc: require("@/assets/image/pic2.png"),
          desc: "pic2",
        },
        {
          imgSrc: require("@/assets/image/pic3.png"),
          desc: "pic3",
        },
        {
          imgSrc: require("@/assets/image/pic4.png"),
          desc: "pic4",
        },
        {
          imgSrc: require("@/assets/image/pic5.png"),
          desc: "pic5",
        },
        {
          imgSrc: require("@/assets/image/pic6.png"),
          desc: "pic6",
        },
      ],
      base64Data: null,
      choosed: null,
    };
  },
  methods: {
    handleMake(e) {
      this.choosed = e;
      this.$refs.cropper.getImg();
    },
    handleCutImg: function (data) {
      this.base64Data = data;
      this.$router.push({
        name: "show",
        params: {
          bgImg: this.base64Data,
          foImg: this.choosed,
        },
      });
      // const formData = new FormData();
      // const binary = atob(data.split(",")[1]);
      // const fileType = data.split(";")[0].split(":")[1];
      // const array = [];
      // for (let i = 0; i < binary.length; i += 1) {
      //   array.push(binary.charCodeAt(i));
      // }
      // formData.append(
      //   "file",
      //   new Blob([new Uint8Array(array)], { type: fileType })
      // );
    },
  },
};
</script>
<style lang='scss'>
.nav {
  max-width: 1200px;
  width: 100%;
}
.foot {
  max-width: 1200px;
  width: 100%;
}
</style>