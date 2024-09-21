import './App.css';
import Body from './components/body';
import Header from './components/header';
//import Title from './components/title';
import UserManagement from './components/userManagement';
//import TopBar from './components/admin_management/topBar';


function App() {
  return (
    <div className="App">
        <Header/>
        <UserManagement/>
    </div>
  );
}

export default App;
