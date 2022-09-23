import { useEffect, useState } from "react";
import { GrAdd, GrClose} from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { OneOrAnother } from "../../helpers/OneOrAnother";
import { setCard } from "../../redux/reducers/taskReducer";
import * as C from "./styles"
import { v4 as uuidv4 } from 'uuid';

const NewCard = () => {
    
    const [titleCard, setTitleCard] = useState("");

    const data = useSelector((state) => state.task)
    const dispatch = useDispatch();

    const [inputShowAdd, setInputShowAdd] = useState(false)

    const handleNewCard = () => {
        if(titleCard != ""){
            dispatch(setCard({id: uuidv4(), name: titleCard, tasks: [], option: false}))
        }
        handleShowCard();
        setTitleCard("");
    }


    const handleShowCard = () => {
        setInputShowAdd(!inputShowAdd)
    }

    return (
        <C.CardArea >
            <C.AddCard color={inputShowAdd? "#EBECF0" : "#7c7c83"} >

                {inputShowAdd && 
                    <>
                        <input 
                         type="text" 
                         placeholder="Insira o titulo do Cartão"
                         value={titleCard} 
                         onChange={(e) => setTitleCard(e.target.value)}
                         />

                        <div className="btns">
                            <button 
                                className="btnAdd" 
                                onClick={handleNewCard}>Adicionar Cartão</button>

                            <button 
                                className="btnClose" 
                                onClick={handleShowCard}>
                                <GrClose style={{fontSize: "20px", color: "#fff"}}/></button>
                        </div>
                    </>
                }
           
                {!inputShowAdd && 
                    <button className="btnAddCard" onClick={handleShowCard}>
                        <GrAdd style={{fontSize: "13px", marginRight: "5px"}}/>
                        {OneOrAnother(data.cards.length)}
                    </button>
                }
            </C.AddCard>
        </C.CardArea>
    );
}
 
export default NewCard;
