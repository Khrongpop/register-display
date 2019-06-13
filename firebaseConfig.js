import firebase from 'firebase/app'
import 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyAfLD6sQmWntuBrakzuk6Z5mP4b6IjqY3k",
      authDomain: "shortcut-28e33.firebaseapp.com",
      databaseURL: "https://shortcut-28e33.firebaseio.com",
      projectId: "shortcut-28e33",
      storageBucket: "shortcut-28e33.appspot.com",
      messagingSenderId: "715502984594",
      appId: "1:715502984594:web:ff4a50ef8ba5c036"
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}

export const provider = new firebase.auth.FacebookAuthProvider()
provider.setCustomParameters({
  'display': 'popup'
});

export const dbAuth = firebase.auth()
export const fireDb = firebase.firestore()
export const realDb = firebase.database()
export const storage = firebase.storage()
export const users = realDb.ref('users')
