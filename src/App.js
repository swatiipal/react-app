//React Elements of JSX
// JSX: It is a HTML, used to render in js

import './App.css';

function App() {
  function handleClick(){
    alert("user has clicked");
  }
  // const element = <h1>Hello, world!</h1>;
  const element = (
    'h1',
    {className: 'text-lowercase'},
    'Hellooo'
  );
  // const element = {
  //   type: 'h1',
  //   props: {
  //     className: 'greeting',
  //     children: 'Hello, world!'
  //   }
  // };
  const user = {
    name: 'SWATI',
    surname: 'PAL'
  }
  function userDetails(user){
    if (user) {
      return user.name + " "+ user.surname;
    }else{
      return <h1>Hello, Stranger</h1>
    }
    // return user.name + " "+ user.surname;
  }

  // if (user) {
  //   <h1>Hello, { user.name }</h1>
  // }else{
  //   <h1>Hello, Stranger</h1>
  // }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
        {element}
        <p>My name is {userDetails(user)}</p>
      </header>
    </div>
  );
}

export default App;
