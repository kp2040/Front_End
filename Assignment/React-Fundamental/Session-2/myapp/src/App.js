import UserGreeting from "./UserGreeting";
import UserGreetingClass from "./UserGreetingClass";
import MiniProfile from "./MiniProfile";

function App() {
  return (
    <div>
      <h1>Comparing Functional and Class Components</h1>

      <UserGreeting username="Krish" />

      <UserGreetingClass username="Krish" />

      <h1>My Mini Profile</h1>
      <MiniProfile />

      

      
    </div>
  );
}

export default App;


