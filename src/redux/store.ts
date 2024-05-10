import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//service
import { apiAuth } from './services/authApi'
import { apiCategory } from './services/categoryApi'
import { apiCommand } from './services/commandApi'
import { apiEvent } from './services/eventApi'
import { apiMessage } from './services/messageService'
import { apiPayment } from './services/paymentApt'
import { apiConversation } from './services/conversationApi'
import { apiRole } from './services/rolesApi'
import { apiTicket } from './services/ticketApi'
import { apiUser } from './services/userApi'

// Slices
import categoryReducer, { CategorySliceKey } from './slices/categorySlice'
import userReducer, { UserSliceKey } from './slices/userSlice'
import eventReducer, { EventSliceKey } from './slices/eventSlice'

const persistConfig = {
  key: 'root',
  storage: storage
}

const combinedReducer = combineReducers({
  [CategorySliceKey]: categoryReducer,
  [UserSliceKey]: userReducer,
  [EventSliceKey]: eventReducer,

  [apiAuth.reducerPath]: apiAuth.reducer,
  [apiCategory.reducerPath]: apiCategory.reducer,
  [apiCommand.reducerPath]: apiCommand.reducer,
  [apiEvent.reducerPath]: apiEvent.reducer,
  [apiMessage.reducerPath]: apiMessage.reducer,
  [apiPayment.reducerPath]: apiPayment.reducer,
  [apiConversation.reducerPath]: apiConversation.reducer,
  [apiRole.reducerPath]: apiRole.reducer,
  [apiTicket.reducerPath]: apiTicket.reducer,
  [apiUser.reducerPath]: apiUser.reducer
})

const rootReducer = (state: any, action: any) => {
  // if (action.type === 'auth/logOut') {
  //   state.auth = undefined
  // }
  return combinedReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat([
      apiAuth.middleware,
      apiCategory.middleware,
      apiCommand.middleware,
      apiEvent.middleware,
      apiMessage.middleware,
      apiPayment.middleware,
      apiConversation.middleware,
      apiRole.middleware,
      apiTicket.middleware,
      apiUser.middleware
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const persistor = persistStore(store)
