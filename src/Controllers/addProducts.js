import firebaseApp from "../Utils/firebase";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";


const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp);
const coleccionClients = 'Clients'
const coleccionProducts = 'Products'

export const addProductsDb = async (data, url) => {
    const result = { statusResponse: true, error: null }
    try {
        await addDoc(collection(db, coleccionClients, auth.currentUser.uid, coleccionProducts), {
            data,
            url
        })
    } catch (error) {
        console.log('error al agregar la coleciion producto', error)
    }
    return result
}

export const uploadimgStorage = async (file) => {
    const result = { statusResponse: false, error: null, url: [] }


    try {
        const imageRef = ref(storage, `/Imagenes/${file.name}`);
        const uploadResult = await uploadBytes(imageRef, file)
        result.url = await getDownloadURL(uploadResult.ref)
        result.statusResponse = true


    } catch (error) {

        result.error = error

    }
    return result

}



