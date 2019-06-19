<template>
  <div>{{imageURL}}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    imageURL: String
  },
  mounted() {
    // var myBlob = this.imageURL;
    // var xhr = new XMLHttpRequest();
    // // load `document` from `cache`
    // xhr.open("GET", myBlob, true);
    // xhr.responseType = "blob";
    // xhr.onload = function(e) {
    //   if (this.status === 200) {
    //     // `blob` response
    //     console.log(this.response);
    //     var reader = new FileReader();
    //     reader.onload = function(e) {
    //       // `data-uri`
    //       console.log(e.target.result);
    //     };
    //     reader.readAsDataURL(this.response);
    //   }
    // };
    // xhr.send();
    // var blobUrl = URL.createObjectURL(myBlob);
    // console.log(blobUrl);
  }
};
</script>

