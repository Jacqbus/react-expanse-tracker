import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

/**
 * Contexts are usefull for separate large app data with smaller pieces e.g.:
 * We can have separate context for "Profile", "Shop", "I18n" etc.
 * 
 * Expanse tracker is quite easy so we're using only this single "Global" state context
 */



// Initial state (just regular object)
const initialState = {
  transactions: []
};


// Create context
export const GlobalContext = createContext(initialState);

/**
 * Provider component
 * Provide states and actions to the components that it is wraps around (children)
 */
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  return (
  <GlobalContext.Provider value={{
    transactions: state.transactions,
    addTransaction,
    deleteTransaction
  }}>
     {children}
  </GlobalContext.Provider>
  )
}