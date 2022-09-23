import * as C from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { setDeleteTask, setShowOptionsTask, setEditTaskTitle  } from "../../redux/reducers/taskReducer"
import Menu from "../../assets/icons/menu.svg"
import EditTask from "../EditTask"
import { useEffect, useState } from "react"

const Tasks = (props) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.task)
    const [index, setIndex] = useState()
    
    const handleShowOptions = () => {
        dispatch(setShowOptionsTask({id: props.id, idCard: props.idCard, option: props.option}))
    }
    
    const handleEditTitleTask = (e) => {
        dispatch(setEditTaskTitle({id: props.id, idCard: props.idCard, text: e.target.value}))
    }

    return (
       <C.DescriptionArea> 
            <label>
                <input type="text" value={props.text} disabled={props.editText} onChange={handleEditTitleTask}/>
                <span onClick={handleShowOptions}>
                    <img src={Menu} alt="" />
                </span>
            </label>
            {props.option && 
                <EditTask id={props.id} idCard={props.idCard} index={index}/>
            }
       </C.DescriptionArea> 
    );
}
 
export default Tasks;