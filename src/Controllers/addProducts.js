import firebaseApp from "../Utils/firebase";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { async } from "@firebase/util";


const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage();
const coleccionClients = 'Clients'
const coleccionProducts = 'Products'

export const addProductsDb = async (data) => {

    try {
        await addDoc(collection(db, coleccionClients, auth.currentUser.uid, coleccionProducts), {
            data
        })
        console.log('enviadooo', data)
    } catch (error) {

        console.log('error al agregar la coleciion producto', error)

    }


}

export const uploadimgStorage = async (imags) => {

    const imageRef = ref(storage, `/Imagenes/${imags.indexInicial}`);

    imags.map((Img) =>
        uploadBytes(imageRef, Img.name).then(() => {
            console.log('se ha subidooo')
            /* const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL,
            }); */
        })
    );


    try {
        uploadBytes(imageRef)
        alert('subidoooooo')
    } catch (error) {
        alert('todo mal', error)
    }


}



