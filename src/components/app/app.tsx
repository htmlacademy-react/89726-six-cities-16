import MainScreen from "../../pages/main-screen/main-screen";

type AppScreenProps = {
  placeCardsCount: number;
  foundedPlacesCount: number;
}

function App({placeCardsCount, foundedPlacesCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      placeCount={placeCardsCount}
      foundedPlacesCount={foundedPlacesCount} />
  );
}

export default App;
