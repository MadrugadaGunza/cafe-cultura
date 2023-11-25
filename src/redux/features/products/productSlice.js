import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
    {
        "id": "1",
        "nome": "Nescafé Clássico",
        "preco": 1000,
        "categoria": "popular",
        "imagem": "https://www.spar.pt/images/thumbs/0005551_cafe-nescafe-classico-10x2gr_550.jpeg"
    },
    {
        "id": "2",
        "nome": "Kopi Luwak",
        "preco": 10000,
        "categoria": "popular",
        "imagem": "https://m.media-amazon.com/images/I/51q-YPZXUZL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "id": "3",
        "nome": "Blue Mountain",
        "preco": 15000,
        "categoria": "popular",
        "imagem": "https://www.malongo.com/boutique/2249-product_default/cafe-moulu-blue-mountain-de-la-jamaique.jpg"
    },
    {
        "id": "4",
        "nome": "Ethiopian Yirgacheffe",
        "preco": 15700,
        "categoria": "popular",
        "imagem": "data:image/jpeg;base64,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"
    },
    {
        "id": "5",
        "nome": "Colombian Supremo",
        "preco": 25000,
        "categoria": "popular",
        "imagem": "https://images.heb.com/is/image/HEBGrocery/005952502-1?jpegSize=150&hei=1400&fit=constrain&qlt=75"
    },
    {
        "id": "6",
        "nome": "Hawaiian Kona",
        "preco": 55000,
        "categoria": "popular",
        "imagem": "https://joffreys.com/wp-content/uploads/2022/01/WEB-Mockup-2022-Origin-HawaiianKona-G.png"
    }
]

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => { state.push(action.payload) },
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;