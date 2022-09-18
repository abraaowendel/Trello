import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "tasks",
    initialState: {
        cards: [
            {id: 1, name: "Segunda", tasks: [{id: 0, text: "Testanto o 1º Card"}]},
            {id: 2, name: "Terça", tasks: [{id: 0, text: "Testanto o 2º Card"}]},
            {id: 3, name: "Quarta", tasks: [{id: 0, text: "Testanto o 3º Card"}]},
            {id: 4, name: "Quinta", tasks: [{id: 0, text: "Testanto o 4º Card"}]},
            {id: 5, name: "Sexta", tasks: [{id: 0, text: "Testanto o 5º Card"}]},
    ]},
    reducers: {
        setTask: (state, action) => {
            state.cards[action.payload.id].tasks.push(action.payload.text)
        },
        setNameTask: (state, action) => {
            state.cards[action.payload.id].name = action.payload.text
        }
    }
})

export const { setTask, setNameTask } = slice.actions;
export default slice.reducer;