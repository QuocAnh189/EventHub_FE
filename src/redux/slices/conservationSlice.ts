import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IConservationResponse, IMessageResponse } from '@type/conversation'

export const ConservationSliceKey = 'conservation'

type InitialType = {
  conservation: IConservationResponse | null
  conservationsHost: IConservationResponse[] | null
  conservationsUser: IConservationResponse[] | null
  messagesCurrent: IMessageResponse[] | null
}

const initialState = {
  conservation: null,
  conservationsHost: [],
  conservationsUser: [],
  messagesCurrent: []
} as InitialType

const conservationSlice = createSlice({
  name: ConservationSliceKey,
  initialState,
  reducers: {
    setConservation: (state, action: PayloadAction<IConservationResponse | null>) => {
      state.conservation = action.payload
    },

    setConservationHost: (state, action: PayloadAction<IConservationResponse[] | null>) => {
      state.conservationsHost = action.payload
    },

    updateConversationHost: (state, action: PayloadAction<IConservationResponse>) => {
      state.conservationsHost?.unshift(action.payload!)
    },

    setConservationUser: (state, action: PayloadAction<IConservationResponse[] | null>) => {
      state.conservationsUser = action.payload
    },

    updateConversationUser: (state, action: PayloadAction<IConservationResponse>) => {
      if (!state.conservationsUser?.find((item) => item.id === action.payload.id)) {
        state.conservationsUser?.unshift(action.payload!)
      }
    },

    setMessagesCurrent: (state, action: PayloadAction<IMessageResponse[]>) => {
      state.messagesCurrent = action.payload
    },

    updateMessagesCurrent: (state, action: PayloadAction<IMessageResponse>) => {
      state.messagesCurrent?.push(action.payload!)
    }
  }
})

export const {
  setConservation,
  setConservationHost,
  updateConversationHost,
  setConservationUser,
  updateConversationUser,
  setMessagesCurrent,
  updateMessagesCurrent
} = conservationSlice.actions

const conservationReducer = conservationSlice.reducer
export default conservationReducer
