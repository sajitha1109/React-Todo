import "./App.css";
import Todo from '../src/component/todo';

function App() {
  
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(180deg, rgb(0,224,249), rgb(3,49,134))",
          border: "5px solid black",
          width: "400px",
          height: "auto",
          boxShadow: "10px 10px 5px rgb(123 119 119) ",
          borderRadius: "10px  ",
        }}
      >
        <h2
          style={{
            borderBottom: "2px solid black",
            textAlign: "left",
            paddingTop: "20px",
            marginInline: "10px",
          }}
        >
          ADDTODO
        </h2>
        <Todo />
      </div>
    </>
  );
}

export default App;
