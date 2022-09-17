import * as C from "./styles"
import Tasks from "../Tasks";
import { GrAdd, GrClose } from "react-icons/gr"
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

const tasks = [
    {texto: "Esse recurso está sendo desenvolvido."}
]

const Card = () => {
    const [inputShow, setInputShow] = useState(false)
    const [textNewTask, setTextNewTask] = useState("")

    const handleTask = () => {
        setInputShow(true)
    }
    const handleTaskEnd = () => {
        setInputShow(false)
        setTextNewTask("")
    }
    const sendTask = (text) => {
        if(text != ""){
            tasks.push({texto: `${text}`})
        }
        setTextNewTask("")
    }

    return (
        <C.Card>
            <C.InputTitle 
                  value="Segunda" 
                />
            
            <C.TaskArea>
                   {tasks.map((item, key) => (
                     <Tasks data={item.texto} key={key}/>
                   ))}
            </C.TaskArea>

            {!inputShow &&

            <>
                <C.NewTask onClick={handleTask}>
                    Adicionar uma tarefa
                    <GrAdd style={{marginLeft: "10px", fontSize: "12px"}}/>
                </C.NewTask>
                
            </>

            }

            {inputShow &&
                <C.EditTask>
                    <TextareaAutosize minRows={1} maxRows={8} value={textNewTask} onChange={(e) => setTextNewTask(e.target.value)}></TextareaAutosize>
                    <div className="btns">
                        <button className="btnAdd" onClick={() => sendTask(textNewTask)}>Adicionar tarefa</button>
                        <button className="btnClose" onClick={handleTaskEnd}><GrClose style={{color: "#fff"}}/></button>
                    </div>
                </C.EditTask>
            }
   
        </C.Card>
    );
}
 
export default Card;