<template>
  <div class="home">
    <div class="row">

    <div v-for="(user, index) in users.reverse()" :key="user.name" class="col-4 p-0" style="height:100%;">
        <card :user="user" :index="index" v-if="index == 0"/>

        <div v-if="index > 0">
          <card :user="user" :index="index"/>
        </div>
    </div>
        </div>

  </div>
</template>

<script>
import Card from '../components/Card';
import { usersRef } from '@/firebaseConfig.js'
export default {
  firebase:{
    users: usersRef
  },
  components:{
    Card
  },
  name: 'home'
}
</script>
<style>

</style>
