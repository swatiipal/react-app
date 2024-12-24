import './App.css';

function App() {
  function handleClick(){
    alert("user has clicked");
  }
  const element = <h1>Hello, world!</h1>;

  const user = {
    name: 'SWATI',
    surname: 'PAL'
  }
  function userDetails(user){
    return user.name + " "+ user.surname;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
        <p>{element}</p>
        <p>My name is {userDetails(user)}</p>
      </header>
    </div>
  );
}

export default App;
