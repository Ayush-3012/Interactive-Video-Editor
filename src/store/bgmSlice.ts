import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BGMState {
  file: File | null;
  url: string;
}

const initialState: BGMState = {
  file: null,
  url: "",
};

const bgmSlice = createSlice({
  name: "bgm",
  initialState,
  reducers: {
    setBGM(state, action: PayloadAction<File>) {
      state.file = action.payload;
      state.url = URL.createObjectURL(action.payload);
    },
    clearBGM(state) {
      state.file = null;
      state.url = "";
    },
  },
});


export const { setBGM, clearBGM } = bgmSlice.actions;
export default bgmSlice.reducer;