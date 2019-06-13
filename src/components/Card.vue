<template>
  <div>
    <div class="s-card text-white">
      <div class="s-top clearfix">
        <div class="float-left" style="margin-left:15px; margin-top:20px;">
          <h5>Visitor.</h5>
          <h2>{{index+1}}</h2>
        </div>
        <div class="float-right">
          <img src="/logo.png" width="100" style="margin-left:-150px;">
        </div>
      </div>
      <div class="s-img">
        <img :src="user.image" :height="windowHeight" width="100%" v-if="size == `x`">
        <img :src="user.image" :height="windowHeight/2" width="100%" v-else>
      </div>
      <div class="s-bottom pt-4 text-center">
        <h1>{{user.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "user", "size"]
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

img {
  object-fit: cover;
}

.s-top {
  background: url("/bg-top.png") no-repeat;
  background-size: contain;
  height: 400px;
  width: 100%;
  position: absolute;
  z-index: 999;
  padding: 15px;
}

.s-bottom {
  background: url("/bg-bot.png") no-repeat;
  background-size: contain;
  height: 400px;
  width: 100%;
  bottom: -184px;
  @include media-breakpoint-up(xl) {
    bottom: -200px;
  }

  position: absolute;
  z-index: 999;
  padding: 15px;
  h1 {
    font-size: 60px;
    display: inline-block;
    // background: url('/bg-text.png') no-repeat;
    background-size: contain;
  }
}
</style>
