import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const onBoardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    isOnboarding: false,
  },
  reducers: {
    setOnboarding(state, action: PayloadAction<boolean>) {
      state.isOnboarding = action.payload;
    },
  },
});

export const { setOnboarding } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
