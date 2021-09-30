import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBaUqhRJwGgpQk5xmVnRCrRHyBKKwtD208",
  authDomain: "burger-queen-ec5c8.firebaseapp.com",
  databaseURL: "https://burger-queen-ec5c8-default-rtdb.firebaseio.com",
  projectId: "burger-queen-ec5c8",
  storageBucket: "burger-queen-ec5c8.appspot.com",
  messagingSenderId: "513778336694",
  appId: "1:513778336694:web:81e2f4601aaea3ac3f3717",
  measurementId: "G-DZ4DCQVF8Z"
};

const app = initializeApp(firebaseConfig)

export default app();