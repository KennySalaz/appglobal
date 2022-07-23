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

export const getDocumentId = async (id) => {
    const result = { statusRespon: true, error: null, documentId: null }
    try {
        const response = await getDoc(doc(db, coleccionProducts, id))
        result.documentId = response.data()
        result.documentId.id = response.id

    } catch (error) {
        result.statusRespon = false
        result.error = error
    }
    return result
}