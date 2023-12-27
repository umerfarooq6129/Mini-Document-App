import Background from "./components/background";
import Foreground from './components/foreground';
const App = () => {
  return (
    <div className="w-full h-screen  bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
