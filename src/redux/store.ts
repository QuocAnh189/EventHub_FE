import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//api
// import { apiAuth } from './services/authApi'
// import { apiQuiz } from './services/quizApi'
// import { apiUser } from './services/userApi'
// import { apiGame } from './services/gameApi'
// import { apiLeaderBoard } from './services/leaderBoardApi'
// import { apiPlayerResult } from './services/playerResultApi'
// import { apiCommunity } from './services/communityApi'
// import { apiCategory } from './services/categoryApi'
// import { apiGrade } from './services/gradeApi'

// Slices

const persistConfig = {
  key: 'root',
  storage: storage
}

const combinedReducer = combineReducers({
  // [apiAuth.reducerPath]: apiAuth.reducer,
  // [apiQuiz.reducerPath]: apiQuiz.reducer,
  // [apiUser.reducerPath]: apiUser.reducer,
  // [apiGame.reducerPath]: apiGame.reducer,
  // [apiLeaderBoard.reducerPath]: apiLeaderBoard.reducer,
  // [apiPlayerResult.reducerPath]: apiPlayerResult.reducer,
  // [apiCommunity.reducerPath]: apiCommunity.reducer,
  // [apiCategory.reducerPath]: apiCategory.reducer,
  // [apiGrade.reducerPath]: apiGrade.reducer
})

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logOut') {
    state.auth = undefined
  }

  return combinedReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'socket/createSocket',
          'apiAuth/executeMutation/fulfilled'
        ],
        ignoredActionPaths: ['socket.socket', 'payload', 'meta.baseQueryMeta.request', 'meta.baseQueryMeta.response'],
        ignoredPaths: ['socket', 'meta.baseQueryMeta.request', 'meta.baseQueryMeta.respone']
      },
      immutableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two', 'items.data']
      }
    }).concat([
      // apiAuth.middleware,
      // apiCategory.middleware,
      // apiGrade.middleware,
      // apiQuiz.middleware,
      // apiUser.middleware,
      // apiGame.middleware,
      // apiLeaderBoard.middleware,
      // apiPlayerResult.middleware,
      // apiCommunity.middleware
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const persistor = persistStore(store)
