<template>
  <div class="home">
    <h1>display2</h1>
    <pre>
    {{users}}
    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
import { usersRef } from '@/firebaseConfig.js'
export default {
  firebase:{
    users: usersRef
  },
  name: 'home',
}
</script>
