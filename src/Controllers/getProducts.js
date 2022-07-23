import firebaseApp from "../Utils/firebase";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";


const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp);
const coleccionClients = 'Clients'
const coleccionProducts = 'Products'



export const getProducts = async () => {
    const response = { statusRespond: true, error: null, products: [] }
    try {
        const result = await getDocs(collection(db, coleccionProducts))

        result.forEach((doc) => {
            const product = doc.data()
            product.id = doc.id
            response.products.push(product)
        })
    } catch (error) {
        response.statusRespond = false
        response.error = error

    }
    return response
}