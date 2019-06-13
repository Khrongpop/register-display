<template>
  <div class="home">
    <pre>
    {{users}}

    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { usersRef } from '@/firebaseConfig.js'
export default {
  firebase:{
    users: usersRef
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
