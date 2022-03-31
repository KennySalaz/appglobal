import firebaseApp from "../Utils/firebase";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";


const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const coleccion = 'Clients'


export const registerClients = async (email, id) => {
    try {
        await setDoc(doc(db, coleccion, id), {
            metodo: email,

        })
        console.log('se ha agregado')
    } catch (error) {
        console.log(error)
    }
}

export const registerClientsAuth = (email, password) => {
const result = { errors : null }
    return createUserWithEmailAndPassword(
        auth, 
        email, 
        password
        )
        .then((useCredenciales) => {
            const clientID = useCredenciales.user.uid
            return sendEmailVerification(useCredenciales.user)
                .then(() => {
                    registerClients(email, clientID)
                    return 'Correcto'
                })
        }).catch((error) => {
            console.log(error)
            if (error.code === 'auth/email-already-in-use') {
                return 'Repetido'
             }

        })

}


export const  signInUserClients = (email , password) => {

    return signInWithEmailAndPassword( auth, email , password)
    .then( (userCredencials) => {

        const user = {
            idUser : userCredencials.user.uid,
            Token : userCredencials.user.accessToken
        }

        return user

    }).catch( errors => {
        console.log(errors)
        if(errors.code === 'auth/wrong-password'){
            return "NotPassword"
        }else if(errors.code === 'auth/too-many-requests'){
            return "Intentos"

        }else {
            return errors
        }

    })
}

export const clientsFirestorage = async (userClientsLocals) => {
    const idUser =  userClientsLocals.idUser

    const clientsRef = doc(db, coleccion,idUser )
    const docsClients = await getDoc(clientsRef)
    return {
        idClients : idUser,
        ...docsClients.data()
    }
}