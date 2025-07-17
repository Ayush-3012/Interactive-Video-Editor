import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface videoState {
  file: File | null;
  url: string;
}

const initialState: videoState = {
  file: null,
  url: "",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoFile(state, action: PayloadAction<File>) {
      state.file = action.payload;
      state.url = URL.createObjectURL(action.payload);
    },
    clearVideo(state) {
      state.file = null;
      state.url = "";
    },
  },
});

export const { setVideoFile, clearVideo } = videoSlice.actions;
export default videoSlice.reducer;
