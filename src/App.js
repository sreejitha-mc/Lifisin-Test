import { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import MainContainer from './components/MainContainer/MainContainer';
import TabBar from './components/TabBar/TabBar';

function App() {
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return <Layout>
     <TabBar/>
     <MainContainer/>
  </Layout>
  
}

export default App;
