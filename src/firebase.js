import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB39kQNdT5Jw1PRv9ojVxc1QxFK7t9QRdA",
  authDomain: "clone-51958.firebaseapp.com",
  projectId: "clone-51958",
  storageBucket: "clone-51958.appspot.com",
  messagingSenderId: "123842654168",
  appId: "1:123842654168:web:a0c72d95b3d4ecb45a8cad",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
