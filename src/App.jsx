import GlobalStyle from './globalStyles';
import Theme from './Theme';
import Header from './components/header/Header';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Header>Heading</Header>
    </Theme>
  );
}

export default App;
