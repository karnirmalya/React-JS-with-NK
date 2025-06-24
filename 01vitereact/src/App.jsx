import Chai from "./one.jsx";

function myApp() {
  return <div>Custom App</div>;
}

function App() {
  const username = "Nirmalya Kar";
  return (
    <>
      <Chai />
      {/* {} :-  Evaluation expression(basically taking the value of the variable after calculating)
       (Expression value will be calculated inside or outside the function)
        (For clarification look at main .jsx and  evaluation cant be done since we can't wtite an expresion as the object entity )*/}
      <h1>Hello Good Evening {username} </h1>
      <p>Hello i am learing React now </p>
    </>
  );
}

export default App;
// export default myApp
