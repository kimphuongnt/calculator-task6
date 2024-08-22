import { createSlice } from '@reduxjs/toolkit';
import { evaluate as mathEvaluate } from 'mathjs';

//state
const initialState = {
  display: '',
  history: [],
};

//action
const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendToDisplay: (state, action) => {
      if (state.display === 'Error') {
        state.display = isNaN(action.payload) ? 'Error' + action.payload : action.payload;
      } else if (state.display === '0' && action.payload !== '.') {
        state.display = action.payload;
      } else {
        state.display += action.payload;
      }
    },
    // setDisplay: (state, action) => {
    //   state.display = action.payload;
    // },
    clearDisplay: (state) => {
      state.display = '';
    },
    backspace: (state) => {
      state.display = state.display.slice(0, -1);
    },
    evaluateExpression: (state) => {
        try {
          const expression = state.display.replace(/\^/g, '**');
          const result = mathEvaluate(expression);
          state.history.push(`${state.display} = ${result}`);
          state.display = result.toString();
        } catch (error) {
          state.display = 'Error';
        }
      },
  },
});
export const { 
    appendToDisplay, 
    clearDisplay,
    backspace, 
    evaluateExpression 
  } = calculatorSlice.actions;

export default calculatorSlice.reducer;