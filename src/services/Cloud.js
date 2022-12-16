import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinem.firebaseapp.com",
      projectId: "online-cinem",
      storageBucket: "online-cinem.appspot.com",
      messagingSenderId: "571257010076",
      appId: process.env.API_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
