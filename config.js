const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    firebaseDatabaseURL: FIREBASE_DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID
  };
  const fbase = firebase.initializeApp(config);
  export default fbase