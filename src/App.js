//React Elements of JSX
// JSX: It is a HTML, used to render in js

import './App.css';
import Count from './counter';
// import diffCount from './diffCounter';

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

  const isLoggedIn = false;
  function loginCheck(isLoggedIn){
    // if(isLoggedIn){
    //   return <p>Dashboard!</p>;
    // }else{
    //   return <p>LoginForm</p>;
    // }
    return isLoggedIn ? <p>Dash board!</p> : <p>Login Form</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
        {element}
        <p>My name is {userDetails(user)}</p>
        <p>{loginCheck(isLoggedIn)}</p>

        {/* Call the component of another file */}
        <Count />
       
      </header>
    </div>
    
  );
}

export default App;
