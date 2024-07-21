import Main from '../../pages/main/main';

type AppScreenProps = {
  placeCardsCount: number;
  foundedPlacesCount: number;
}

function App({placeCardsCount, foundedPlacesCount}: AppScreenProps): JSX.Element {
  return (
    <Main
      placeCount={placeCardsCount}
      foundedPlacesCount={foundedPlacesCount}
    />
  );
}

export default App;
