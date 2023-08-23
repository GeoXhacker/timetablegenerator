import firebase from 'firebase';

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASE_URL,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_SENDER_ID,
// 	appId: process.env.REACT_APP_APP_ID,
// };

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

firebase.initializeApp(firebaseConfig);
firebase.auth();

export default firebase;
