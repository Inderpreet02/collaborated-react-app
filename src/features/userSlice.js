import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    basket: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    ADD_TO_BASKET: (state, action) => {
      var item = action.payload;
      state.basket = [...state.basket].concat(item);
    },
    REMOVE_FROM_BASKET: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id.item.id
      );

      console.log("FOR LOOP");

      const ind=0;
      
      let newBasket = [...state.basket];
      let prevBasket = [...state.basket];
      var x;
      
      for(let i=0; i<newBasket.length;i++){
        // console.log(newBasket[i]);
        // console.log(newBasket[i].item.id);

        if( newBasket[i].item.id === action.payload.id.item.id){
          x = i;
          console.log("id i = to",newBasket[i].item.id-1)
        }
      }


      console.log(action.payload.id.item.id);
      console.log("FOR EACH")
      // let num=0;
      newBasket.forEach((num) => {
        console.log(num);
        // num++;
      })
      console.log("X => ", x);
      if(x >= 0) {
          newBasket.splice(x, 1);
          window.alert("An Item is removed to the Basket!!!!");

      }else{
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket`
          )
      }

      state.basket = newBasket;
    }
  },
});

export const { login, logout, ADD_TO_BASKET, REMOVE_FROM_BASKET } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectBasket = (state) => state.user.basket;

export default userSlice.reducer;
