import Menu from "../../assets/icons/menu.svg"
import * as C from "./styles"

const Tasks = (props) => {
    return (
       <C.DescriptionArea>
            <p>{props.text}</p>
            <span>
                <img src={Menu} alt="" />
            </span>
       </C.DescriptionArea> 
    );
}
 
export default Tasks;