import { useEffect, useState } from "react";
import { GrAdd, GrClose} from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { OneOrAnother } from "../../helpers/OneOrAnother";
import { setCard } from "../../redux/reducers/taskReducer";
import * as C from "./styles"

const NewCard = () => {

    const [titleCard, setTitleCard] = useState("");

    const data = useSelector((state) => state.task)
    const dispatch = useDispatch();

    const [inputShowAdd, setInputShowAdd] = useState(false)

    const handleNewCard = () => {
        if(titleCard != ""){
            dispatch(setCard({id: data.cards.length + 1, name: titleCard}))
        }
        setTitleCard("")
    }

    const handleShowCard = () => {
        setInputShowAdd(!inputShowAdd)
    }

    return (
        <C.CardArea >
            <C.AddCard color={inputShowAdd? "#EBECF0" : "#7c7c83"} heigth={inputShowAdd? "auto" : "25px"}>

                {inputShowAdd && 
                    <>
                        <input 
                         type="text" 
                         placeholder="Insira o titulo do Cartão"
                         value={titleCard} 
                         onChange={(event) => setTitleCard(event.target.value)}/>

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
