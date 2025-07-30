import { createSlice } from "@reduxjs/toolkit";


export const prosuctSlice = createSlice({
    name: 'product',
    initialState: {
        product: {
            id: 123,
            category: 'mobilePhone',
            description: 'oppo Reno13 5G (8GB RAM, 128GB, Luminous Blue)',
            price: '89000.00',
            brandColor: 'Luminous Blue',
            ram: '16GB',
            internalStorage: '256GB',
            keyFeatures: ['Display: 6.59 inches (16.74 cm), AMOLED, 120 Hz Refresh Rate', 'Memory: 8GB RAM, 128GB ROM', 'Processor: MediaTek Dimensity 8350, Octa Core', 'Camera: 50 MP + 8 MP + 2 MP Triple Rear & 50 MP Front Camera', 'Battery: 5600 mAh with 80W SUPERVOOC', 'USP: Underwater Photography with IP68 & IP69, AI Photography, One Click AI Clarity'],
            image: ['https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/312491_7_naom91.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/312491_8_wmjf6g.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/312491_9_xvlvgs.png?tr=w-640'],
            overView: 'The Oppo Reno13 6.59-inch 5G Smartphone is powered by the MediaTek Dimensity 8350 platform, featuring a custom 4nm octa-core processor for smooth gaming and lightning-fast multitasking. With 8GB RAM and 128GB ROM, this smartphone offers ample space for apps, photos, and videos. The combination of high-capacity storage and RAM ensures seamless transitions between tasks and a clutter-free experience, accommodating all your needs effortlessly.'
        }
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        }
    }
})

export const { setProduct } = prosuctSlice.actions

export default prosuctSlice.reducer;