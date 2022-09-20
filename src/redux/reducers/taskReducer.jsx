import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "tasks",
    
    initialState: {cards: []},
    // TODA ALTERAÇÃO FEITA AQUI VC APAGA NO LOCAL STORAGE MANUALMENTE
    reducers: {
        setCard: (state, action) => {
            state.cards.push({id: action.payload.id, name: action.payload.name, tasks: []})
        },
        setTask: (state, action) => {
           let card = state.cards[action.payload.id].tasks;
           card.push({id: card.length + 1, text: action.payload.text}) 
           console.log(state.cards)
        },
        setNameTask: (state, action) => {
            state.cards[action.payload.id].name = action.payload.text
        }
    }

})

export const { setTask, setNameTask,setCard } = slice.actions;
export default slice.reducer;