import * as C from "./styles"

import Tasks from "../Tasks";
import TextareaAutosize from 'react-textarea-autosize';

import { GrAdd, GrClose } from "react-icons/gr"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNameTask, setTask } from "../redux/reducers/TaskReducer";


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
                        <button className="btnAdd" onClick={{}}>Adicionar tarefa</button>
                        <button className="btnClose" onClick={handleShowInputAdd}><GrClose style={{color: "#fff"}}/></button>
                    </div>
                </C.EditTask>
            }
   
        </C.Card>
    );
}
 
export default Card;