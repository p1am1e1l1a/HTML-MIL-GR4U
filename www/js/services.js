angular.module('starter.services', [])

.factory('Context', function(){
var config = {
    apiKey: "AIzaSyDjQgRtvJNZkvhBSCveyXbmdv5n7EFY6Jg",
    authDomain: "html-mil-grau.firebaseapp.com",
    databaseURL: "https://html-mil-grau.firebaseio.com",
    storageBucket: "html-mil-grau.appspot.com",
    messagingSenderId: "906905468037"
  };
  firebase.initializeAPP(confg);

return {
  get: function() {
    return firebase;
  }
}

})
.factory('Login', function(Context) {
  return {
    login: function(email, senha) {
firebase.auth().signInwithEmailAndPassword(email, senha)
.then(function() {
  callback();
})

.cath(function(error) {
  callback(error);
});

    },
    novo: function(email, senha) {
firebase.auth().createUserWithEmailAndPassword(email, senha)
.then(function() {
  callback();
})

.cath(function(error) {
  callback(error)
    });
    }
  };
})
//Context.get()