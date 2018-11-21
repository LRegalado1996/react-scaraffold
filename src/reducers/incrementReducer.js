const initialState = {
  counter: 1
}

const prueba = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  } //end case
}// end export

export default prueba;
