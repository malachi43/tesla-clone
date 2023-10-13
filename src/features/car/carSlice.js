import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cars: [
        { id: 1, model: "Model S", description: "Order Online For Touchless Delivery", backgroundImg: "model-s.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Model S" },
        { id: 2, model: "Model S", description: "Order Online For Touchless Delivery", backgroundImg: "model-y.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Model Y" },
        { id: 3, model: "Model S", description: "Order Online For Touchless Delivery", backgroundImg: "model-3.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Model 3" },
        { id: 4, model: "Model S", description: "Order Online For Touchless Delivery", backgroundImg: "model-x.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Model X" },
        { id: 5, model: "Model S", description: "Money Back Guarantee", backgroundImg: "solar-panel.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Lowest Cost Solar Panels in America" },
        { id: 6, model: "Model S", description: "Solar Roof Less Than a New Roof Plus Solar Panels", backgroundImg: "solar-roof.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Solar For New Roofs" },
        { id: 7, model: "Model S", description: "", backgroundImg: "accessories.jpg", leftButtonText: "Custom Order", rightButtonText: "Existing Inventory", title: "Accessories" },
    ],
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {}
})


export default carSlice.reducer
