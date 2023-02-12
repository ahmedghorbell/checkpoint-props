import './App.css';
import Profile from './profile/Profile';
import ahmed from './ahmed.jpg'

function App() {

  return (
    <div className="App">
      <Profile  fullName='ahmed ghorbel' bio='Completing a full-stack JS training program at GOMYCODE while pursuing a masters degree in accounting at the business school' profession='Student'>
        <img src={ahmed} alt="profile" className='child'/>
      </Profile>
    </div>
  );
}

export default App;
