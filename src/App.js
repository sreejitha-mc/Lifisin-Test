import './App.css';
import Layout from './components/Layout/Layout';
import MainContainer from './components/MainContainer/MainContainer';
import TabBar from './components/TabBar/TabBar';

function App() {
  return <Layout>
     <TabBar/>
     <MainContainer/>
  </Layout>
  
}

export default App;
