import Header from "./Header";
import Copyright from "./Copyright";
import Hello from "./Hello";
import Card from "./Card";
import Warning from "./Warning";

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center h-screen pt-[147px]">
        <Hello />
        <div className="mt-8">
          <Card />
        </div>
      </div>
      <Copyright />
      <Warning />
    </>
  );

}

export default App
