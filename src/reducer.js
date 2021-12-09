//Inizializzo lo state ...
export let initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//Funzione reducer con la quale estraggo i dati dallo state
//action è l'azione(stringa) da eseguire
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Copio il carello
      let newBasket = [...state.basket];
      //Cerco l'index dell'elemento da rimuovere
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //lo elimino dal carrello
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove the product");
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    //Default case
    default:
      return state;
  }
};

export default reducer;
