<template>
  <div class="home">
    <!-- <div v-if="users.length >= 7">
      <div style="width:50%; height:100%; float:left">
        <card :user="users[getFistIndex]" :index="index" size="x"/>
      </div>
      <div style="width:50%; height:100%; float:right">
        <div style="width:100%;  height:50%; float:left">
          <card :user="users[get4Index]" :index="index" size="y"/>
        </div>
        <div style="width:100%;  height:50%; float:left">
          <card :user="users[get7Index]" :index="index" size="y"/>
        </div>
      </div>
    </div>
    <div v-if-else="users.length >= 4">
      <div style="width:50%; height:100%; float:left">
        <card :user="users[getFistIndex]" :index="index" size="x"/>
      </div>
      <div style="width:50%; height:100%; float:left">
        <card :user="users[get4Index]" :index="index" size="x"/>
      </div>
    </div>
    <div v-if-else="users.length >= 1">
      <div style="width:100%; height:100%; float:left">
        <card :user="users[getFistIndex]" :index="index" size="x"/>
      </div>
    </div>-->

    <!-- <div style="width:50%; height:100%; float:left">
      <card :user="users[get1]" :index="get1" size="x"/>
    </div>
    <div style="width:50%; height:100%; float:right">
      <div style="width:100%;  height:50%; float:left">
        <card :user="users[get2]" :index="get2" size="y"/>
      </div>
      <div style="width:100%;  height:50%; float:left">
        <card :user="users[get3]" :index="get3" size="y"/>
      </div>
    </div>-->

    <div style="width:50%; height:100%; float:left">
      <card :user="users[get1-3]" :index="get1-3" size="x" v-if="users[get1-3]"/>
    </div>
    <div style="width:50%; height:100%; float:right">
      <div style="width:100%;  height:50%; float:left">
        <card :user="users[get2-3]" :index="get2-3" size="y" v-if="users[get1-3]"/>
      </div>
      <div style="width:100%;  height:50%; float:left">
        <card :user="users[get3-3]" :index="get3-3" size="y" v-if="users[get1-3]"/>
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
  computed: {
    get1() {
      let count = this.users.length;
      if (count <= 1) {
        return count - 1;
      } else {
        if (count % 3 == 0) {
          console.log(count % 3);
          return count - 2 - 1;
        } else if (count % 3 == 2) {
          console.log(count % 2);
          return count - 1 - 1;
        } else {
          console.log(count % 1);
          return count - 1;
        }
      }
    },
    get2() {
      let count = this.users.length;
      if (count <= 1) {
        return count - 1;
      } else {
        if (count % 3 == 0) {
          console.log(count % 3);
          return count - 1 - 1;
        } else if (count % 3 == 2) {
          console.log(count % 2);
          return count - 1;
        } else {
          console.log(count % 1);
          return count - 2 - 1;
        }
      }
    },
    get3() {
      let count = this.users.length;
      if (count <= 2) {
        return count - 1;
      } else {
        if (count % 3 == 0) {
          console.log(count % 3);
          return count - 1;
        } else if (count % 3 == 2) {
          console.log(count % 2);
          return count - 2 - 1;
        } else {
          console.log(count % 1);
          return count - 1 - 1;
        }
      }
    },
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
