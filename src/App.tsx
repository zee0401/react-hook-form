import "./App.css";
import { Users } from "./users/components/Users";
import { UsersProvider } from "./users/components/UsersProvider";

function App() {
  return (
    <div>
      <UsersProvider />
    </div>
  );
}

export default App;
