import * as C from "./styles"

import Tasks from "../Tasks";
import TextareaAutosize from 'react-textarea-autosize';

import { GrAdd, GrClose } from "react-icons/gr"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNameTask, setTask } from "../../redux/reducers/taskReducer";


const Card = (props) => {

    const dispatch = useDispatch();

    const [inputShow, setInputShow] = useState(false);
    const [textNewTask, setTextNewTask] = useState("");


    // MOSTRA E DESATIVA O ADICIONAR NOVA TAREFA
    const handleShowInputAdd = () => {
        setInputShow(!inputShow)
    }

    const handleChangeTitleTask = (e) => {
        dispatch(setNameTask({text: e.target.value, id: props.idCard}))
    }

    const handleAddNewTask = (e) => {
        if(textNewTask !== ""){
            dispatch(setTask({text: textNewTask, id: props.idCard}))
        }
        return setTextNewTask("")
    }

    return (
        <C.Card>
            <C.InputTitle 
                  value={props.name}
                  onChange={handleChangeTitleTask}
                />
            
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