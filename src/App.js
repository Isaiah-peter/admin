
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import Home from './pages/home/Home'
import './app.css'

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home /> 
      </div>
    </div>
  );
}

export default App;
