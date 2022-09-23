import * as C from "./styles";
import { setDeleteAllTasks, setDeleteCard, setShowOption } from "../../redux/reducers/taskReducer";
import { useDispatch, useSelector } from "react-redux";

const Options = (props) => {

    const data = useSelector((state) => state.task)
    const dispatch = useDispatch();

    const handleOptionShow = () => {
        dispatch(setShowOption({id: props.idCard, option: false}))
    }

    const handleDeleteCard = () => {
        dispatch(setDeleteCard({id: props.idCard}))
    }
    const handleCleanAllTasks = () => {
        dispatch(setDeleteAllTasks({id: props.idCard}))
    }

    return (
        <C.OptionsArea>
            <button onClick={handleDeleteCard}>Deletar</button>

            {data.cards[props.index]?.tasks.length > 0 &&
                <button onClick={handleCleanAllTasks}>Limpar</button>
            }

            <button onClick={handleOptionShow}>Fechar</button>
        </C.OptionsArea>
    );
}
 
export default Options;