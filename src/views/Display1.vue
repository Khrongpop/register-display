<template>
  <div class="home">
    <div style="width:100%; float:left height:100%; ">
      <!-- <div v-for="(user, index) in users" :key="user.name" class="col-4 p-0" style="height:100%;">
        <card :user="user" :index="index" v-if="index == 0"/>

        <div v-if="index > 0">
          <card :user="user" :index="index"/>
        </div>
      </div>-->

      <div v-for="(user, index) in users" :key="user.name">
        <div v-if="index === 0" style="width:50%; height:100%; float:left">
          <card :user="user" :index="index" size="x"/>
        </div>
        <!-- <div v-else>
          <div style="width:100%; float:left">
            <card :user="user" :index="index"/>
          </div>
        </div>-->
      </div>
      <div style="width:50%; height:100%; float:right">
        <div v-for="(user, index) in users" :key="user.name">
          <div v-if="index > 0 && index < 3">
            <div style="width:100%;  height:50%; float:left">
              <card :user="user" :index="index" size="y"/>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: "home"
};
</script>
<style>
</style>
