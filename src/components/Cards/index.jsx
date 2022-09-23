import * as C from "./styles"


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tasks from "../Tasks";
import TextareaAutosize from 'react-textarea-autosize';

import { FiMoreHorizontal } from "react-icons/fi"
import { GrAdd, GrClose } from "react-icons/gr"

import { setNameCard, setTask, setShowOption} from "../../redux/reducers/taskReducer";

import Options from "../Options";

const Card = (props) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.task)

    const [inputShow, setInputShow] = useState(false);
    const [textNewTask, setTextNewTask] = useState("");
    const [index, setIndex] = useState()

    useEffect(() => {
        handleIndex()
    }, [data.cards])

    // MOSTRA E DESATIVA O ADICIONAR NOVA TAREFA
    const handleShowInputAdd = () => {
        setInputShow(!inputShow)
    }

    const handleChangeTitleCard = (event) => {
        if(event.target.value != ""){
            dispatch(setNameCard({id: props.idCard, text: event.target.value}))
        }
    }

    const handleAddNewTask = () => {
        if(textNewTask !== ""){
            dispatch(setTask({id: props.idCard, text: textNewTask}))
        }
        handleShowInputAdd();
        setTextNewTask("")
    }

    const handleOptionShow = () => {
        dispatch(setShowOption({id: props.idCard, option:true}))
    }

    const handleIndex = () => {  
        for (let i = 0; i < data.cards.length; i++) {
            if(data.cards[i].id == props.idCard){
                setIndex(i)
            } 
        }
    }

    return (
        <C.Card>

            {data.cards[index]?.option &&
               <Options idCard={props.idCard} index={index}/>
            }

            <C.CardTop>
                <C.InputTitle 
                    value={props.name}
                    onChange={handleChangeTitleCard}
                    />
                <C.IconOptions onClick={handleOptionShow}>
                    <FiMoreHorizontal/>
                </C.IconOptions>
            </C.CardTop>
        
            <C.TaskArea>
                {props.tasks.map((item, key) => (
                    <Tasks id={item.id} idCard={index} text={item.text} key={key}/>
                ))}
            </C.TaskArea>

            {!inputShow &&

            <>
                <C.NewTask onClick={handleShowInputAdd}>
                    Adicionar uma tarefa
                    <GrAdd style={{marginLeft: "10px", fontSize: "12px"}}/>
                </C.NewTask>
            </>

            }

            {inputShow &&
                <C.EditTask>
                    <TextareaAutosize placeholder="Insira um titulo para essa atividade" minRows={3} maxRows={8} value={textNewTask} onChange={(e) => setTextNewTask(e.target.value)}></TextareaAutosize>
                    <div className="btns">
                        <button className="btnAdd" onClick={handleAddNewTask}>Adicionar tarefa</button>
                        <button className="btnClose" onClick={handleShowInputAdd}><GrClose/></button>
                    </div>
                </C.EditTask>
            }
   
        </C.Card>
    );
}
 
export default Card;