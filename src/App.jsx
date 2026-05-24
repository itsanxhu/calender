import Calender from "./Components/Calender";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="mt-32 flex flex-col gap-2 items-center">
      <Calender />
      <Card />
    </div>
  );
};

export default App;
