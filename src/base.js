import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5KwijfhWmsSC_m6FWKO1Pjc9euMr4cOw",
  authDomain: "recettes-app-8b972.firebaseapp.com",
  databaseURL: "https://recettes-app-8b972.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
