import { PayloadAction, createSlice } from '@reduxjs/toolkit';
 
interface ModalFormState {
  isVisible : boolean,
} 

const initialState: ModalFormState = {
  isVisible : true,
}

const ModalFormSlice = createSlice({
  name: 'ModalForm',
  initialState,
  reducers: { 
    VisibleForm(state) { 
      state.isVisible = true;
    }, 
    NotVisibleForm(state){
      state.isVisible = false;
    }, 
  }
});

export const { VisibleForm, NotVisibleForm } = ModalFormSlice.actions;
export default ModalFormSlice.reducer;