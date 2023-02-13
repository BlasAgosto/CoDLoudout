import logo from './Pics/logo.png'
import TopNav from './TopNav';

function App() {
  return (
    <>
    <div className="app--logo">
      <img  src={logo} alt='Cod Loadouts'/>
    </div>
    <TopNav />
    </>
  );
}

export default App;
