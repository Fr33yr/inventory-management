import {PageContent} from './components/index'
import {SideMenu, Header, Footer} from "./components/common/layout/index";

function App() {
  return (
    <div className="app">
        <Header></Header>
        <main>
          <SideMenu></SideMenu>
          <PageContent/>
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
