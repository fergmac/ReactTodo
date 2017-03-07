import firebase from 'firebase';

 try {
    var config = {
        apiKey: "AIzaSyD6N_PXxb4uLeKQYRzlrzMVTwd1s0hn5Ik",
        authDomain: "ferg-todo-app.firebaseapp.com",
        databaseURL: "https://ferg-todo-app.firebaseio.com",
        storageBucket: "ferg-todo-app.appspot.com",
        messagingSenderId: "140771706321"
    };
  firebase.initializeApp(config);

 } catch (e) {

 }
 
export var firebaseRef = firebase.database().ref();

export default firebase;