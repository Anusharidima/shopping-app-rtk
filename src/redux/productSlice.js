import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export  const fetchProducts = createAsyncThunk("products", async () => {
  const response = await fetch ("https://dummyjson.com/products");
  console.log(response,"response");
  
  const data = await response.json();
  console.log(data,"data");
  return data.products
 
})

const initialState={
  items: [],
  status:undefined,
  error:null
}

const productSlice = createSlice({
   name:"products",
   initialState,
   extraReducers : (builder) => {
     builder.addCase(fetchProducts.pending, (state) => {
       state.status = "loading"

     }),
     builder.addCase(fetchProducts.fulfilled, (state,action) => {
       state.status = "success"
       state.items = action.payload
     }),
     builder.addCase(fetchProducts.rejected, (state,action) => {
       state.status = "failed"
       state.error = action.error.message
     })
   },

})

export default productSlice.reducer



