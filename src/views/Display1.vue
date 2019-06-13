<template>
  <div class="home">
    <h1>display1</h1>
    <pre>
    {{users}}
    </pre>
  </div>
</template>

<script>
import { usersRef } from '@/firebaseConfig.js'
export default {
  firebase:{
    users: usersRef
  },
  name: 'home'
}
</script>
