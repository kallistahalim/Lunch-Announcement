var firebaseConfig = {
    apiKey: "AIzaSyA0SRXYJT8nBSRzQSJkbbUBdRdWF2YHTr4",
    authDomain: "lunch-announcement.firebaseapp.com",
    databaseURL: "https://lunch-announcement.firebaseio.com",
    projectId: "lunch-announcement",
    storageBucket: "lunch-announcement.appspot.com",
    messagingSenderId: "163601287102",
    appId: "1:163601287102:web:da4650a955a25b2d2d9bef",
    measurementId: "G-8373ZVP2VQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().on("value", function(snapshot){
      $("#menu").html(snapshot.val().Name);
      $("#ingredients").html(snapshot.val().Ingredients);

  })