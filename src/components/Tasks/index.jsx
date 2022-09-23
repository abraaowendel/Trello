import { useDispatch } from "react-redux"
import Menu from "../../assets/icons/menu.svg"
import { setDeleteTask } from "../../redux/reducers/taskReducer"
import * as C from "./styles"

const Tasks = (props) => {

    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(setDeleteTask({id: props.idCard, idTask: props.id}))
    }

    return (
       <C.DescriptionArea>
            <p>{props.text}</p>
            <span onClick={handleDeleteTask}>
                <img src={Menu} alt="" />
            </span>
       </C.DescriptionArea> 
    );
}
 
export default Tasks;