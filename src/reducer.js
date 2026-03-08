export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  user: null,
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in the basket!`,
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
// Syntax of useReducer
// const [state, dispatch] = useReducer(reducer, initialState)

// useReducer is used to manage complex state logic or multiple related states.

// While using useReducer, we work with 4 things:

// 1. state
//    - the current state of the application

// 2. dispatch
//    - a function used to send an action object to the reducer

// 3. reducer
//    - a function that decides how the state should change
//      based on the action type

// 4. initialState
//    - the starting state of the application

// The reducer must always return a NEW state object.

//BIG LESSON LEARNT
//whenever you can derive something from the existing state without the need of storing it. it is called derived state.
//whenever you need to calculate total or filter things out from ann array just use javascript functions.
