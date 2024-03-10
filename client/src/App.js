import logo from './logo1.jpeg.png';
import './App.css';
import Registration from'./components/Registration'
import Login from './components/Login';
import Appbar from './components/Appbar';
function App({store}) {
  function Page(){
switch(store.getState()){
  case "Login":
    return (<div><Login/></div>)
  case "Registration":
    return (<div><Registration/></div>)
}
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Agricultural Products Rural Entrepreneurship Management System</p>
        
      </header>
      <div className="App-body"></div>
      <Appbar store ={store}/>
      
      <center><Page/></center>
    </div>                     
  );                           
}

export default App;
