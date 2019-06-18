<template>
  <div>
    <div style="width:50%; height:100%; float:left">
      <div ref="printMe" v-if="users[0]">
        <card :user="users[0]" :index="0" size="x"/>
        {{getImageName(users[0].image)}}
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
      output: null,
      us: []
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
    },
    getImageName(url) {
      // let name = url;
      let name = url.substring(89);
      let index = name.indexOf("?");
      name = name.substring(0, index);
      // name = splits[2];
      return name;
    }
  },
  mounted() {
    usersRef.once("value", snapshot => {
      // snapshot.forEach(childSnapshot => {
      //   // console.log(childSnapshot);
      // });
      // snapshot.forEach(function(childSnapshot) {
      //   // var childKey = childSnapshot.key;
      //   // var childData = childSnapshot.val();
      //   // console.log("childKey", childKey);
      //   // console.log("childData", childData);
      //   // this.us.push(childData);
      // });
    });
  }
};
</script>
