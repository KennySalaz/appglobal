import { getAuth, signOut } from "firebase/auth"
import { doc, getFirestore, onSnapshot } from "firebase/firestore"
import { createContext, useEffect, useReducer } from "react"
import firebaseApp from "../Utils/firebase"


const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)


const initialState = {
    user: {},
}


if (localStorage.getItem('idToken')) {

    const userData = {
        Metodo: localStorage.getItem('Metodo'),
        idToken: localStorage.getItem('idToken'),
        idClient: localStorage.getItem('idClient'),
        Nombre: localStorage.getItem('Nombre'),
        Apellido: localStorage.getItem('Apellido'),
        Correo: localStorage.getItem('Correo'),
        Celular: localStorage.getItem('Celular'),
        FotoUrl: localStorage.getItem('FotoUrl'),
        Rol: localStorage.getItem('Rol')
    }
    initialState.user = userData

} else {
    initialState.user = {}
}


const StateContext = createContext({
    user: {},
    signUp: () => {},
    signIn : (userData) => {},
})


function reducer(state, action) {

    switch (action.type) {
        case 'NEW_SESSION':
            return {
                ...state,
                user: Object.assign(state.user, action.payload)
            }
        case 'EXIT_SESSION':
            return {
                ...state,
                user: {},

            }
        default: return state
    }

}


function StateProvedor(props) {

    const [state, dispatch] = useReducer(reducer, initialState)




    useEffect(() => {

        if (localStorage.getItem('idToken')) {
            const clientsRef = doc(db, 'Clients', localStorage.getItem('idClient'))
            onSnapshot(clientsRef, (doc) => {
                if (localStorage.getItem('idToken') === doc.data().idToken) {
                    const userdata = {
                        Nombre: doc.data().Nombre,
                        Apellido: doc.data().Apellido,
                        Correo: doc.data().Correo,
                        Celular: doc.data().Celular,
                        FotoUrl: doc.data().FotoUrl,
                        Rol: doc.data().Rol
                    }
                    dispatch({
                        type: 'NEW_SESSION',
                        payload: userdata,
                    })
                    localStorage.setItem('Nombre', doc.data().Nombre)
                    localStorage.setItem('Apellido', doc.data().Apellido)
                    localStorage.setItem('Correo', doc.data().Correo)
                    localStorage.setItem('Celular', doc.data().Celular)
                    localStorage.setItem('FotoUrl', doc.data().FotoUrl)
                    localStorage.setItem('Rol', doc.data().Rol)

                } else {
                    console.log('no hay usuario')
                    signUp()
                }
            })
        }
    }, [state.user])


    function signIn(userDate) {
        console.log(`usuarioData:`, userDate)
        localStorage.setItem('Metodo', userDate.Metodo)
        localStorage.setItem('idToken', userDate.idToken)
        localStorage.setItem('idClient', userDate.idClient)
        localStorage.setItem('Nombre', userDate.Nombre)
        localStorage.setItem('Apellido', userDate.Apellido)
        localStorage.setItem('Correo', userDate.Correo)
        localStorage.setItem('Celular', userDate.Celular)
        localStorage.setItem('FotoUrl', userDate.FotoUrl)
        localStorage.setItem('Rol', userDate.Rol)
        dispatch({
            type: 'NEW_SESSION',
            payload: userDate
        })
    }

  

    function signUp() {

        localStorage.removeItem('Metodo')
        localStorage.removeItem('idToken')
        localStorage.removeItem('idClient')
        localStorage.removeItem('Nombre')
        localStorage.removeItem('Apellido')
        localStorage.removeItem('Correo')
        localStorage.removeItem('Celular')
        localStorage.removeItem('FotoUrl')
        localStorage.removeItem('Rol')

        signOut(auth).then(() => {
            dispatch({
                type: 'NULL_USER',
                user: {},
            })

        }).catch(error => {
            console.log(`No se pudo cerrar la sesion`)
        })

    }


    return (

        <StateContext.Provider
            value={{
                user: state.user,
                signUp,
                signIn,
            }}
            {...props}
        />

    )

}


export { StateContext, StateProvedor }



