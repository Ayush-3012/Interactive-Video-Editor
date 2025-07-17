import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IntroOutroState {
  intro: File | null;
  outro: File | null;
  introUrl: string;
  outroUrl: string;
}

const initialState: IntroOutroState = {
  intro: null,
  outro: null,
  introUrl: "",
  outroUrl: "",
};

const introOutroSlice = createSlice({
  name: "introOutro",
  initialState,
  reducers: {
    setIntro(state, action: PayloadAction<File>) {
      state.intro = action.payload;
      state.introUrl = URL.createObjectURL(action.payload);
    },
    setOutro(state, action: PayloadAction<File>) {
      state.outro = action.payload;
      state.outroUrl = URL.createObjectURL(action.payload);
    },
  },
});

export const { setIntro, setOutro } = introOutroSlice.actions;
export default introOutroSlice.reducer;
