
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from './component/Header';
import DisplayCounter from './component/DisplayCounter';
import Container from './component/Container';
import Controls from './component/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './component/PrivacyMessage';


function App() {
    const privacy=useSelector(store=>store.privacy);
    

  return <>

    <center className="px-4 py-5 my-5 text-center">
      <Container>
      <Header />
      {privacy ?<PrivacyMessage/>:<DisplayCounter/>}
      <Controls/>
      </Container>
    </center>
  </>
}

export default App;