import * as C from "./styles"


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tasks from "../Tasks";
import TextareaAutosize from 'react-textarea-autosize';

import { FiMoreHorizontal } from "react-icons/fi"

import { GrAdd, GrClose } from "react-icons/gr"

import { setNameTask, setTask } from "../../redux/reducers/taskReducer";
import Options from "../Options";

const Card = (props) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.task)
    const [optionsShow, setOptionsShow] = useState(false);


    const [inputShow, setInputShow] = useState(false);
    const [textNewTask, setTextNewTask] = useState("");


    // MOSTRA E DESATIVA O ADICIONAR NOVA TAREFA
    const handleShowInputAdd = () => {
        setInputShow(!inputShow)
    }

    const handleChangeTitleTask = (event) => {
        if(event.target.value != ""){
            dispatch(setNameTask({text: event.target.value, id: props.idCard}))
        }
    }

    const handleAddNewTask = () => {
        if(textNewTask !== ""){
            dispatch(setTask({text: textNewTask, id: props.idCard}))
        }
        handleShowInputAdd();
        setTextNewTask("")
    }

    return (
        <C.Card>

            {optionsShow && 
                <Options/>
            }

            <C.CardTop>
                <C.InputTitle 
                    value={props.name}
                    onChange={handleChangeTitleTask}
                    />
                <C.IconOptions onClick={() => setOptionsShow(!optionsShow)}>
                    <FiMoreHorizontal/>
                </C.IconOptions>
            </C.CardTop>
        
            <C.TaskArea>
                {props.tasks.map((item, key) => (
                    <Tasks id={item.id} text={item.text} key={key}/>
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