import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface videoState {
  file: File | null;
  url: string;
  duration: number;
}

const initialState: videoState = {
  file: null,
  url: "",
  duration: 0,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoFile(state, action: PayloadAction<File>) {
      state.file = action.payload;
      state.url = URL.createObjectURL(action.payload);
    },
    setVideoDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { setVideoFile, setVideoDuration } = videoSlice.actions;
export default videoSlice.reducer;
