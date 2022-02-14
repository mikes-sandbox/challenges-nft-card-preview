import { GlobalStyle } from './global.styles';

import NftPreviewCard from './components/nft-preview-card/nft-preview-card.styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <div className="card-container">
        <NftPreviewCard />
      </div>
    </div>
  );
}

export default App;
