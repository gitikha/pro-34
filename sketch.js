//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBX2xBXamHJcS05Y3Qkrazx_I6-184orPk",
    authDomain: "virtual-pet-604b4.firebaseapp.com",
    databaseURL: "https://virtual-pet-604b4.firebaseio.com",
    projectId: "virtual-pet-604b4",
    storageBucket: "virtual-pet-604b4.appspot.com",
    messagingSenderId: "911822553464",
    appId: "1:911822553464:web:2ab043a93c732edf6cc88d",
    measurementId: "G-LK7W2R6Q6F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

function draw() {  

  drawSprites();
  //add styles here

}



