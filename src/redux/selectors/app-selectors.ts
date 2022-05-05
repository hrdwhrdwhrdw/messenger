import { RootState } from '../store/store';
export const getInitialized = (state: RootState) => {
  return state.app.initialized;
};