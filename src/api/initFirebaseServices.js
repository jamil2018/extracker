import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
  measurementId: process.env.REACT_APP_MeasurementId,
};

// service invocation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
