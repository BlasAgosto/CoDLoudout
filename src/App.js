import logo from './Pics/codlogo.PNG'
import TopNav from './TopNav';

function App() {
  return (
    <>
    <div className="app--logo">
      <img className="banner" src={logo} alt='Cod Loadouts'/>
    </div>
    <TopNav />
    </>
  );
}

export default App;
