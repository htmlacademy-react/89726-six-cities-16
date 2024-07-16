import MainScreen from "../../pages/main-screen/main-screen";

type AppScreenProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placeCount={placeCardsCount} />
  );
}

export default App;
