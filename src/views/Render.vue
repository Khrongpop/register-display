<template>
  <div>
    <div style="width:50%; height:100%; float:left">
      <div ref="printMe">
        <card :user="users[0]" :index="0" size="x"/>
      </div>
      <br>
      <b-button @click="download">download</b-button>
    </div>

    <img :src="output">
  </div>
</template>
<script>
import Card from "../components/Card";
import { usersRef } from "@/firebaseConfig.js";
export default {
  firebase: {
    users: usersRef
  },
  components: {
    Card
  },
  data() {
    return {
      output: null
    };
  },
  methods: {
    async download() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL"
      };
      console.log(this.$html2canvas(el, options));
      this.output = await this.$html2canvas(el, options);
    }
  },
  mounted() {
    // this.download();
  }
};
</script>
