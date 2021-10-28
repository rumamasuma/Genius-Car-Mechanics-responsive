const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID,
  };
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBHBWjMPEU-Eak8Gqi4aWsKiKhbICPmyts",
  //   authDomain: "genius-car-mechanics-fd152.firebaseapp.com",
  //   projectId: "genius-car-mechanics-fd152",
  //   storageBucket: "genius-car-mechanics-fd152.appspot.com",
  //   messagingSenderId: "41003728561",
  //   appId: "1:41003728561:web:b974fd4487f059547c6c90"
  // };
  export default firebaseConfig;
