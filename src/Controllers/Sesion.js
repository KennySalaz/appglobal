import firebaseApp from "../Utils/firebase";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const coleccion = 'Clients'


export const registerClients = async (email, id) => {
    try {
        await setDoc(doc(db, coleccion, id), {
            Metodo: email,
        })
        console.log('se ha agregado')
    } catch (error) {
        console.log(error)
    }
}

export const registerClientsAuth = (email, password) => {
    const result = { errors: null }
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


export const signInUserClients = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredencials) => {
            console.log('Credencials:', userCredencials)

            const user = {
                idUser: userCredencials.user.uid,
                token: userCredencials.user.accessToken
            }

            return user

        }).catch(errors => {
            console.log(errors)
            if (errors.code === 'auth/wrong-password') {
                return "NotPassword"
            } else if (errors.code === 'auth/too-many-requests') {
                return "Intentos"

            } else {
                return errors
            }

        })
}

export const editClientsToken = async (idUser, token) => {

    const clienteRefs = doc(db, coleccion, idUser)
    await updateDoc(clienteRefs, { idToken: token })

}

export const clientsFirestorage = async (userClientsLocals) => {
    const idUser = userClientsLocals.idUser
    const token = userClientsLocals.token
    const idTokenLs = localStorage.getItem('idToken')


    const clientsRef = doc(db, coleccion, idUser)
    const docsClients = await getDoc(clientsRef)

    if (docsClients.exists()) {
        if (idTokenLs && idTokenLs === docsClients.data().idToken) {
            return {
                idClients: idUser,
                ...docsClients.data()
            }

        } else {
            editClientsToken(idUser, token)
            return {
                Metodo: docsClients.data().Metodo,
                idClient: idUser,
                idToken: token
            }
        }
    } else {
        console.log(`No existe el documento`)
    }

}

export const resetPassword = (email) => {

    return sendPasswordResetEmail(auth, email)
        .then(() => {
            return 'Correcto'
        }).catch(error => {
            return 'Error'

        })

}