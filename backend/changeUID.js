// config
let email = "dninshaba@gmail.com";
const admin = require('firebase-admin')
let serviceAccountData = require("./constants/serviceAccountKey.json");
let adminConfig = {
    credential: admin.credential.cert(serviceAccountData),
    databaseURL: "https://restaurantapp-16561-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const firebaseConfig = {
	apiKey: "AIzaSyC6uHOzSbVjaEn3jGp3wlYCaMIfnPvsLuI",
	authDomain: "restaurantapp-16561.firebaseapp.com",
	databaseURL: "https://restaurantapp-16561-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "restaurantapp-16561",
	storageBucket: "restaurantapp-16561.appspot.com",
	messagingSenderId: "114474673016",
	appId: "1:114474673016:web:83c69405986179c5269e8d",
	measurementId: "G-M3VQMQT5J8"
  };
let newUserOverrides = {
    uid: "2m0vV1I0BghYUmxv9YZSN8pJRcQ2",
};

// 2m0vV1I0BghYUmxv9YZSN8pJRcQ2

Start();
async function Start() {
    console.log("Initializing firebase. databaseURL:", adminConfig.databaseURL);
    admin.initializeApp(adminConfig);

    console.log("Starting update for user with email:", email);
    let oldUser = await admin.auth().getUserByEmail(email);
    console.log("Old user found:", oldUser);

    await admin.auth().deleteUser(oldUser.uid);
    console.log("Old user deleted.");

    let dataToTransfer_keys = ["disabled", "displayName", "email", "emailVerified", "phoneNumber", "photoURL", "uid"];
    let newUserData = {};
    for (let key of dataToTransfer_keys) {
        newUserData[key] = oldUser[key];
    }
    Object.assign(newUserData, newUserOverrides);
    console.log("New user data ready: ", newUserData);

    let newUser = await admin.auth().createUser(newUserData);
    console.log("New user created: ", newUser);
    // return oldUser
}