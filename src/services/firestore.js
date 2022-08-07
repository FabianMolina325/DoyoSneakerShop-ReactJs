import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByvGML4IG_JP6LTor4Q__GQtF4iGOqPOc",
    authDomain: "doyosneakershop.firebaseapp.com",
    projectId: "doyosneakershop",
    storageBucket: "doyosneakershop.appspot.com",
    messagingSenderId: "214367435687",
    appId: "1:214367435687:web:7a9b92d10319eb3b475482"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export async function getAllShoes(){
    const shoesCollectionRef = collection(db, "shoes")

    const docSnapshot = await getDocs(shoesCollectionRef) 

    const dataShoes = docSnapshot.docs.map( item => {
        return item.data();
    })

    return(dataShoes);
}

export default db;