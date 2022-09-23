import * as C from "./styles";
import { FiEdit2 } from "react-icons/fi"
import { RiDeleteBin7Line } from "react-icons/ri"
import { useDispatch } from "react-redux";
import { setDeleteTask, setShowEdit} from "../../redux/reducers/taskReducer";

const EditTask = (props) => {
    
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(setDeleteTask({id: props.idCard, idTask: props.id}))
    }
    const handleShowEdit = () => {
        dispatch(setShowEdit({id: props.id, idCard: props.idCard, editText: props.editText}))
    }

    return (
        <C.EditTaskArea>
            <button onClick={handleShowEdit}><FiEdit2/></button>
            <button onClick={handleDeleteTask}><RiDeleteBin7Line/></button>
        </C.EditTaskArea>
    );
}
 
export default EditTask;
