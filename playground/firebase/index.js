import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD6N_PXxb4uLeKQYRzlrzMVTwd1s0hn5Ik",
    authDomain: "ferg-todo-app.firebaseapp.com",
    databaseURL: "https://ferg-todo-app.firebaseio.com",
    storageBucket: "ferg-todo-app.appspot.com",
    messagingSenderId: "140771706321"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
      app: {
          name: 'Todo App',
          version: '1.0.0'
      },
      isRunning: true,
      user: {
          name: 'Ferg',
          age: 31
      }
  });


var todoRef = firebaseRef.child('todos');


todoRef.on('child_added', (snapshot) => {
    console.log('new todo added', snapshot.key, snapshot.val());
});

todoRef.push({
    text: 'Sing a Song',
});
todoRef.push({
    text: 'guitar',
});


// Arrays in Firebase:

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//     text: 'Walk the dog!'
// });



// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref changed', snapshot.val());
// });

// firebaseRef.child('user').update({
//     name: 'Dunc'
// });
// firebaseRef.child('app').update({
//     name: 'New App'
// });


// firebaseRef.once('value').then((snapshot) => {
//     //.val returns object
//     console.log('got entire database', snapshot.val());
// }, (e) => {
//     console.log('unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('got value', snapshot.val());
// });

// firebaseRef.off();

// firebaseRef.update({isRunning: false})

//   firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application'
//   });

//   firebaseRef.child('app').update({
//       name: 'Todo Application'
//   }).then(() => {
//       console.log('update worked');
//   }, () => {
//       console.log('update failed');
//   });

// firebaseRef.update({
//     'app/name': 'Todo Application',
//     'user/name':  'Jacq'
// })

// firebaseRef.child('app').update({
//     name: 'Todo Application'
// });

// firebaseRef.child('user').update({
//     name: 'Jacq'
// })

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//     version: '2.0',
//     name: null
// });

// firebaseRef.update({
//     isRunning: null
// });

// firebaseRef.child('user/age').remove();
