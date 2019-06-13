<template>
  <div class="nun">
    <div class="s-card text-white" :class="classs('','ying')">
      <div class="s-top clearfix h-500" :class="classs('s-top','')">
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
      <div class="s-bottom pt-4 text-center" :class="size == 'x' ? 'h500':'h250' + ' ' +classs('s-top','')" >
        <h1>{{user.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "user", "size"],
  methods: {
    classs(classs,classs2) {
      return this.size == 'x' ? classs: classs2
    }
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

img {
  object-fit: cover;
}
.nun {
  position: relative;
}
.ying {
    background: url("/bg2.png") no-repeat;
      background-size: contain;
  width: 100%;


}
.s-top {
  background: url("/bg-top.png") no-repeat;
  background-size: contain;
  width: 100%;
  position: absolute;
  z-index: 999;
  padding: 15px;
}
.h-500 {
  height: 500px;
}
.h-250 {
  height: 300px;
}
.s-bottom {
  background: url("/bg-bot.png") no-repeat;
  background-size: contain;
  width: 100%;
  bottom:0;
  height: 321px;
  position: absolute;
  z-index: 999;
  padding: 15px;
  h1 {
   
    display: inline-block;
    background-size: contain;
    position: absolute;
    bottom: 10px;
    // background: url('/bg-text.png') no-repeat;
    background-size: contain;
  }
}
</style>
