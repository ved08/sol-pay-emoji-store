import React, { useState } from "react";
import Product from "../components/Products"
import HeadComponent from '../components/Head';
import { PublicKey } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "ved0811";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet()
  const [products, setProducts] = useState([])
  const renderNotConnectedContainer = () => (
    <div> 
      <img src="https://img.pokemondb.net/sprites/home/normal/bulbasaur.png" alt="emoji" />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>    
    </div>
  );
  const renderBuyComponent = () => (
    <div className="products-container">
      {
        products.map(p => (
          <Product key={p.id} product={p}/>
        ))
      }
    </div>
  )
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header">Pokemon Card Store</p>
          <p className="sub-text">Buy PokeCards here!</p>
        </header>

        <main>
          {publicKey ? renderBuyComponent() : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
