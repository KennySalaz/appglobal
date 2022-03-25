import React, { createContext, useReducer, useContext } from 'react'

export  const Context = createContext()

const UseContextGlobal = ({ reducer, initialState, children }) => {
    return(
        <Context.Provider value={useReducer(reducer ,initialState)}>
            {children}
        </Context.Provider>
    )
}

export default UseContextGlobal

export const GlobalsContext = () =>  useContext(Context)
