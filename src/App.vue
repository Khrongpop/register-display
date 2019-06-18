<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "dbadmanx";
  src: url("/dbadmanx.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body,
html,
input,
option,
textarea {
  font-family: "dbadmanx" !important;
}
</style>
