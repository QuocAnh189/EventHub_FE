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
import { apiPayment } from './services/paymentApi'
import { apiConversation } from './services/conversationApi'
import { apiRole } from './services/rolesApi'
import { apiTicket } from './services/ticketApi'
import { apiUser } from './services/userApi'
import { apiPermission } from './services/permissionApi'
import { apiFile } from './services/fileApi'
import { apiFunction } from './services/functionApi'

// Slices
import categoryReducer, { CategorySliceKey } from './slices/categorySlice'
import userReducer, { UserSliceKey } from './slices/userSlice'
import eventReducer, { EventSliceKey } from './slices/eventSlice'
import socketReducer, { SocketSliceKey } from './slices/socketSlice'
import conservationReducer, { ConservationSliceKey } from './slices/conservationSlice'

const persistConfig = {
  key: 'root',
  storage: storage
}

const combinedReducer = combineReducers({
  [CategorySliceKey]: categoryReducer,
  [UserSliceKey]: userReducer,
  [EventSliceKey]: eventReducer,
  [SocketSliceKey]: socketReducer,
  [ConservationSliceKey]: conservationReducer
})

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    persistedReducer,

    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiCategory.reducerPath]: apiCategory.reducer,
    [apiCommand.reducerPath]: apiCommand.reducer,
    [apiEvent.reducerPath]: apiEvent.reducer,
    [apiMessage.reducerPath]: apiMessage.reducer,
    [apiPayment.reducerPath]: apiPayment.reducer,
    [apiConversation.reducerPath]: apiConversation.reducer,
    [apiFile.reducerPath]: apiFile.reducer,
    [apiRole.reducerPath]: apiRole.reducer,
    [apiTicket.reducerPath]: apiTicket.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    [apiPermission.reducerPath]: apiPermission.reducer,
    [apiFunction.reducerPath]: apiFunction.reducer
  },

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
      apiFile.middleware,
      apiRole.middleware,
      apiTicket.middleware,
      apiUser.middleware,
      apiPermission.middleware,
      apiFunction.middleware
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const persistor = persistStore(store)
