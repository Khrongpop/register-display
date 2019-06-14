<template>
  <div class="home">
    <div v-if="users.length >= 9">
      <div style="width:50%; height:100%; float:left">
        <card :user="users[getThirdIndex]" :index="index" size="x"/>
      </div>
      <div style="width:50%; height:100%; float:right">
        <div style="width:100%;  height:50%; float:left">
          <card :user="users[get6Index]" :index="index" size="y"/>
        </div>
        <div style="width:100%;  height:50%; float:left">
          <card :user="users[get8Index+1]" :index="index" size="y"/>
        </div>
      </div>
    </div>
    <div v-if-else="users.length >= 6">
      <div style="width:50%; height:100%; float:left">
        <card :user="users[getThirdIndex]" :index="index" size="x"/>
      </div>
      <div style="width:50%; height:100%; float:left">
        <card :user="users[get6Index]" :index="index" size="x"/>
      </div>
    </div>
    <div v-if-else="users.length >= 3">
      <div style="width:100%; height:100%; float:left">
        <card :user="users[getThirdIndex]" :index="index" size="xl"/>
      </div>
    </div>
    <!-- <input type="text" v-model="count"> -->
  </div>
</template>

<script>
import Card from "../components/Card";
import { usersRef } from "@/firebaseConfig.js";
export default {
  firebase: {
    users: usersRef
  },
  data() {
    return {
      count: 0
    };
  },
  components: {
    Card
  },
  computed: {
    getFistIndex() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      console.log(count % 9);
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 1;
        } else {
          var i;
          for (i = 0; i <= count; i++) {
            if (count % 9 === i) {
              result = count - i;
            }
          }
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 0) {
        return result - 1;
      }
      return result;
    },
    getSecondIndex() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 8;
        } else if (count % 9 == 1) {
          result = count - 1;
        } else if (count % 9 == 2) {
          result = count - 1;
        } else if (count % 9 == 3) {
          result = count - 2;
        } else if (count % 9 == 4) {
          result = count - 3;
        } else if (count % 9 == 5) {
          result = count - 4;
        } else if (count % 9 == 6) {
          result = count - 5;
        } else if (count % 9 == 7) {
          result = count - 6;
        } else if (count % 9 == 8) {
          result = count - 7;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 1) {
        return result - 1;
      }
      return result;
    },
    getThirdIndex() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 7;
        } else if (count % 9 == 1) {
          result = count - 8;
        } else if (count % 9 == 2) {
          result = count - 1;
        } else if (count % 9 == 3) {
          result = count - 1;
        } else if (count % 9 == 4) {
          result = count - 2;
        } else if (count % 9 == 5) {
          result = count - 3;
        } else if (count % 9 == 6) {
          result = count - 4;
        } else if (count % 9 == 7) {
          result = count - 5;
        } else if (count % 9 == 8) {
          result = count - 6;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 2) {
        return result - 1;
      }
      return result;
    },
    get4Index() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 6;
        } else if (count % 9 == 1) {
          result = count - 7;
        } else if (count % 9 == 2) {
          result = count - 8;
        } else if (count % 9 == 3) {
          result = count - 1;
        } else if (count % 9 == 4) {
          result = count - 1;
        } else if (count % 9 == 5) {
          result = count - 2;
        } else if (count % 9 == 6) {
          result = count - 3;
        } else if (count % 9 == 7) {
          result = count - 4;
        } else if (count % 9 == 8) {
          result = count - 5;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 3) {
        return result - 1;
      }
      return result;
    },
    get5Index() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 5;
        } else if (count % 9 == 1) {
          result = count - 6;
        } else if (count % 9 == 2) {
          result = count - 7;
        } else if (count % 9 == 3) {
          result = count - 8;
        } else if (count % 9 == 4) {
          result = count - 1;
        } else if (count % 9 == 5) {
          result = count - 1;
        } else if (count % 9 == 6) {
          result = count - 2;
        } else if (count % 9 == 7) {
          result = count - 3;
        } else if (count % 9 == 8) {
          result = count - 4;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 4) {
        return result - 1;
      }
      return result;
    },
    get6Index() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 4;
        } else if (count % 9 == 1) {
          result = count - 5;
        } else if (count % 9 == 2) {
          result = count - 6;
        } else if (count % 9 == 3) {
          result = count - 7;
        } else if (count % 9 == 4) {
          result = count - 8;
        } else if (count % 9 == 5) {
          result = count - 1;
        } else if (count % 9 == 6) {
          result = count - 1;
        } else if (count % 9 == 7) {
          result = count - 2;
        } else if (count % 9 == 8) {
          result = count - 3;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 5) {
        return result - 1;
      }
      return result;
    },
    get7Index() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 3;
        } else if (count % 9 == 1) {
          result = count - 4;
        } else if (count % 9 == 2) {
          result = count - 5;
        } else if (count % 9 == 3) {
          result = count - 6;
        } else if (count % 9 == 4) {
          result = count - 7;
        } else if (count % 9 == 5) {
          result = count - 8;
        } else if (count % 9 == 6) {
          result = count - 1;
        } else if (count % 9 == 7) {
          result = count - 1;
        } else if (count % 9 == 8) {
          result = count - 2;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 6) {
        return result - 1;
      }
      return result;
    },
    get7Index() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 2;
        } else if (count % 9 == 1) {
          result = count - 3;
        } else if (count % 9 == 2) {
          result = count - 4;
        } else if (count % 9 == 3) {
          result = count - 5;
        } else if (count % 9 == 4) {
          result = count - 6;
        } else if (count % 9 == 5) {
          result = count - 7;
        } else if (count % 9 == 6) {
          result = count - 8;
        } else if (count % 9 == 7) {
          result = count - 1;
        } else if (count % 9 == 8) {
          result = count - 1;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 7) {
        return result - 1;
      }
      return result;
    },
    get8Index() {
      let count = this.users.length;
      // let count = this.count;
      let result = count;
      if (count <= 1) {
        result = count - 1;
      } else {
        if (count % 9 == 0) {
          result = count - 1;
        } else if (count % 9 == 1) {
          result = count - 2;
        } else if (count % 9 == 2) {
          result = count - 3;
        } else if (count % 9 == 3) {
          result = count - 4;
        } else if (count % 9 == 4) {
          result = count - 5;
        } else if (count % 9 == 5) {
          result = count - 6;
        } else if (count % 9 == 6) {
          result = count - 7;
        } else if (count % 9 == 7) {
          result = count - 8;
        } else if (count % 9 == 8) {
          result = count - 1;
        }
      }
      if (result < 9) {
        return result;
      } else if (result % 9 === 8) {
        return result - 1;
      }
      return result;
    }
  },
  name: "home"
};
</script>
<style>
</style>