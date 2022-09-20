import { PageContainer } from "../../GlobalStyle";
import * as C from "./styles"
import Card from "../../components/Cards";
import { useSelector } from "react-redux";
import NewCard from "../../components/NewCard";

const Home = () => {

    const data = useSelector((state) => state.task)

    return (
        <PageContainer>
            <C.GridArea>
                {data.cards &&
                 <>
                    {data.cards.map((item, key) => (
                        <Card name={item.name} idCard={item.id - 1} tasks={item.tasks} key={key}/>
                    ))}
                 </> 
                }
                <NewCard/>
            </C.GridArea>

        </PageContainer>
    );
}
 
export default Home;