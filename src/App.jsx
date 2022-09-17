import { Template } from "./GlobalStyle";
import { MainRoutes } from "./routers/MainRoutes";
import Header from "./components/Header"

const App = () => {
  return (
    <Template>
      <Header/>
      <MainRoutes/>
    </Template>
  );
}
 
export default App;