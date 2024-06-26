import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    detail:[]
}
const CartSlice = createSlice((
    {
        name:'cart',
        initialState,
        reducers:{
            addCart(state,action)
            {
                const {id} = action.payload
                const findIndex = state.detail.find(ids=> ids.id === id)
                if(findIndex)
                    {
                        
                      findIndex.price+=1
                    }
                    else{
                state.detail.push(action.payload)
                    }
            } ,
            removeCart(state,action)
            {
                const ids = action.payload
                const findIndex = state.detail.findIndex(idm=> idm.id === ids)       
                state.detail.splice(findIndex,1)
            },
            addQuantity(state,action)
            {
                const ids = action.payload
                const findIndex = state.detail.findIndex(idms=> idms.id === ids)
                state.detail[findIndex].price+=1

                
            },
            reduceQuantity(state,action)
            {
                const ids = action.payload
                const findIndex = state.detail.findIndex(idms=> idms.id === ids)
             console.log(state.detail[findIndex].price)
                if( state.detail[findIndex].price <= 0)
                    {
                        state.detail.splice(findIndex,1)
                    }
                else
                {
                    state.detail[findIndex].price -=1
                }
            }
    }
}
))

export const {addCart,removeCart,addQuantity,reduceQuantity} = CartSlice.actions

export default CartSlice.reducer