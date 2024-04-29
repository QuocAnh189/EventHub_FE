import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'interfaces/systems/user'

export const UserSliceKey = 'user'

type InitialType = {
  user: IUser | null
}

const initialState = {
  user: null
} as InitialType

const userSlice = createSlice({
  name: UserSliceKey,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
