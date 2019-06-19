<template>
  <div>
    <div style="width:100%; height:100%; float:left">
      <div ref="printMe" v-if="users[0]">
        <card :user="users[0]" :index="0" size="x"/>
      </div>
      {{getImageName(users[0].image)}}
      <br>
      <b-button @click="download(getImageName(users[0].image))">download</b-button>
    </div>

    <div v-for="(user, index) in users" :key="index">
      <!-- <download-image :imageURL="user.image"/> -->
    </div>

    <img :src="output">
  </div>
</template>
<script>
import Card from "../components/Card";
import DownloadImage from "../components/DownloadImag";
import { usersRef } from "@/firebaseConfig.js";
export default {
  firebase: {
    users: usersRef
  },
  components: {
    Card,
    DownloadImage
  },
  data() {
    return {
      output: null,
      us: []
    };
  },
  methods: {
    async download(name) {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL"
      };

      let canvas = await this.$html2canvas(el, options);
      console.log(canvas);
      // this.output = canvas;
      this.save(canvas, name);
    },
    getImageName(url) {
      // let name = url;
      let name = url.substring(89);
      let index = name.indexOf("?");
      name = name.substring(0, index);
      // name = splits[2];
      return name;
    },
    async save(url, name) {
      let downloadFile = await this.toBlob(url);
      url = window.URL.createObjectURL(downloadFile);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
      // var saveBlob = (function() {
      //   var a = document.createElement("a");
      //   document.body.appendChild(a);
      //   a.style = "display: none";
      //   return function(blob, fileName) {
      //     var url = window.URL.createObjectURL(blob);
      //     a.href = url;
      //     a.download = fileName;
      //     a.click();
      //     window.URL.revokeObjectURL(url);
      //   };
      // })();
      // saveBlob(file, "test.zip");
    },
    toBlob(url) {
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], name, {
            type: "image/jpeg"
          });
          return file;
        });
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
