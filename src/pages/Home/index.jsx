import { PageContainer } from "../../GlobalStyle";
import * as C from "./styles"
import Card from "../../components/Cards";

const Home = () => {
    return (
        <PageContainer>
            <C.GridArea>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </C.GridArea>
        </PageContainer>
    );
}
 
export default Home