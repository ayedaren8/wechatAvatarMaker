<template>
  <div class="warp">
    <img class="nav" src="@/assets/image/nav.png" />
    <canvas
      ref="mycanvas"
      canvas-id="mycanvas"
      z-index="-9999"
      style="position: fixed; left: 100%"
      width="800"
      height="800"
    ></canvas>
    <choose-card-item class="showCard" :imgSrc="base64Data"
      ><template>长按图片保存</template></choose-card-item
    >
    <img class="foot" src="@/assets/image/foot.png" />
  </div>
</template>
<script>
import chooseCardItem from "../../components/choose-card-item/index";
export default {
  components: {
    chooseCardItem,
  },
  data() {
    return {
      base64Data: null,
    };
  },
  methods: {
    handleMake(e) {
      console.log(e);
      this.$refs.cropper.getImg();
    },
  },
  mounted() {
    console.log(12112);
    var foImg = new Image();
    foImg.src = this.$route.params.foImg;
    var bgImg = new Image();
    bgImg.src = this.$route.params.bgImg;
    var _this = this;
    setTimeout(() => {
      var myImage = this.$refs.mycanvas;
      var cvsCtx = myImage.getContext("2d");
      cvsCtx.drawImage(bgImg, 20, 20, 780, 780);
      cvsCtx.drawImage(foImg, 0, 0, 800, 800);
      var dataUrl = myImage.toDataURL("image/jpeg", 1.0);
      _this.base64Data = dataUrl;
    }, 100);
  },
};
</script>
<style lang='scss'>
.nav {
  max-width: 1200px;
  width: 100%;
}
.showCard {
  margin: 20px auto;
}
.foot {
  max-width: 1200px;
  width: 100%;
}
</style>