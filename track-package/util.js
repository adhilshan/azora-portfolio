const firebaseConfig = {
    apiKey: "AIzaSyCdihIiuWGDPxeTTwvOxl0m5gcTDACYHAo",
    authDomain: "azoraadsfamily.firebaseapp.com",
    databaseURL: "https://azoraadsfamily-default-rtdb.firebaseio.com",
    projectId: "azoraadsfamily",
    storageBucket: "azoraadsfamily.appspot.com",
    messagingSenderId: "7623121422",
    appId: "1:7623121422:web:51595ab4fb5b51af3fba5f",
    measurementId: "G-NJM19CQ9LZ"
};

const firebase2 = firebase.initializeApp(firebaseConfig, 'Secondary');
var Array;

firebase2.database().ref('/packages/4daYD7YIJeN5GiTX8UyVA89y0M82').once('value', (snapshot) => {
    let id = Object.keys(snapshot.val());
    Array = id;
});
//-NhBYyYFjDpw_sutiRoQ
//Array.includes(tr_id)
function track() {
    //var trackInput = document.getElementById('track_input');
    var error = document.getElementById('error');

    const tr_id = document.getElementById('track_input').value;


    if (Array.indexOf(tr_id) !== -1) {
        error.style.display = 'none';
        window.open('/view-package/?trackid=' + tr_id);
    } else {
        error.style.display = 'block';
    }
}

