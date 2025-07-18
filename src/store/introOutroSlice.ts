import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IntroOutroState {
  intro: File | null;
  outro: File | null;
  introUrl: string;
  outroUrl: string;
  introDuration: number;
  outroDuration: number;
}

const initialState: IntroOutroState = {
  intro: null,
  outro: null,
  introUrl: "",
  outroUrl: "",
  introDuration: 0,
  outroDuration: 0,
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
    setIntroDuration(state, action: PayloadAction<number>) {
      state.introDuration = action.payload;
    },
    setOutroDuration(state, action: PayloadAction<number>) {
      state.outroDuration = action.payload;
    },
  },
});

export const { setIntro, setOutro, setIntroDuration, setOutroDuration } =
  introOutroSlice.actions;
export default introOutroSlice.reducer;
