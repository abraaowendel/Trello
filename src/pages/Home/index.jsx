import { PageContainer } from "../../GlobalStyle";
import * as C from "./styles"
import Card from "../../components/Cards";
import { useSelector } from "react-redux";

const Home = () => {
    const data = useSelector((state) => state.task)
    return (
        <PageContainer>
            <C.GridArea>
                {data &&
                 <>
                    {data.cards.map((item, key) => (
                        <Card name={item.name} idCard={item.id - 1} tasks={item.tasks} key={key}/>
                    ))}
                 </> 
                }
                
            </C.GridArea>
        </PageContainer>
    );
}
 
export default Home;