import Header from "./components/Header/Header";
import Ranking from "./pages/Ranking/Ranking";
import Links from "./pages/Links/Links";
import Profile from "./pages/Profile/Profile";
import Findgame from "./pages/FindGame/Findgame";
import GameVsComputer from "./pages/GameVsComputer/GameVsComputer";
import FreeBoard from "./pages/FreeBoard/FreeBoard";
function App() {
  return (
      <div>
          <Header />
          {/*<Ranking />*/}
          {/*<Links />*/}
          {/*<Profile />*/}
          {/*<Findgame />*/}
          {/*<GameVsComputer />*/}
          <FreeBoard />
      </div>
  );
}
export default App;
