import Header from "./components/Header";
import Ranking from "./pages/Ranking/Ranking";
import Links from "./pages/Links/Links";
import Profile from "./pages/Profile/Profile";
import Findgame from "./pages/FindGame/Findgame";
function App() {
  return (
      <div>
          <Header />
          {/*<Ranking />*/}
          {/*<Links />*/}
          {/*<Profile />*/}
          <Findgame />
      </div>
  );
}
export default App;
