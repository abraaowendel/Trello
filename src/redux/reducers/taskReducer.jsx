import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


export const slice = createSlice({
    name: "tasks",
    
    initialState: {cards: []},
    // TODA ALTERAÇÃO FEITA AQUI VC APAGA NO LOCAL STORAGE MANUALMENTE
    reducers: {
        setCard: (state, action) => {
            state.cards.push({
                id: action.payload.id, 
                name: action.payload.name, 
                tasks: [], 
                option: action.payload.option
            })
        },
        
        setDeleteCard: (state, action) => {
            let cards = state.cards.filter((item => item.id != action.payload.id))
            state.cards = cards;
        },

        //MEXA NOS IDS, PORQUE O ID É GERADO PELO UUID AGORA
        setTask: (state, action) => {
            state.cards.map((item) => {
                if(item.id === action.payload.id){
                    item.tasks.push({id: uuidv4(), text: action.payload.text})
                }
            })
       },
        setNameCard: (state, action) => {
            state.cards.map((item) => {
                if(item.id === action.payload.id){
                    item.name = action.payload.text;
                }
            })
        },
        setShowOption: (state, action) => {
            state.cards.map((item) => {
                if(item.id === action.payload.id){
                    item.option = action.payload.option;
                }
            })
        },
        setDeleteAllTasks: (state, action) => {
            state.cards.map((item) => {
                if(item.id === action.payload.id){
                    if(item.tasks.length > 0){
                        item.tasks = []
                    }
                    item.option = !item.option;
                }
            })
        },
        setDeleteTask: (state, action) => {
            state.cards.map((item) => {
                if(item.id === action.payload.id){
                    let newTasks = [...item]
                    newTasks.tasks.filter((item) => item.id != action.payload.idTask)
                    item.tasks = newTasks
                }
            })
        }
    }

})

export const {setCard, setNameCard, setDeleteCard, setTask, setShowOption, setDeleteAllTasks, setDeleteTask } = slice.actions;
export default slice.reducer;