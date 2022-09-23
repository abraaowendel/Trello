import * as C from "./styles"

import { PageContainer } from "../../GlobalStyle";
import { useSelector } from "react-redux";

import Card from "../../components/Cards";
import NewCard from "../../components/NewCard";

const Home = () => {

    const data = useSelector((state) => state.task)

    return (
        <PageContainer>
            <C.GridArea>
                {data.cards &&
                 <>
                    {data.cards.map((item, key) => (
                        <Card name={item.name} idCard={item.id} tasks={item.tasks} key={key}/>
                    ))}
                 </> 
                }
                {data.cards.length < 5 && 
                    <NewCard/>
                }
            </C.GridArea>

        </PageContainer>
    );
}
 
export default Home;