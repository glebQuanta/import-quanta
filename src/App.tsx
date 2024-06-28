import React from 'react';
import './App.css';

export const App: React.FC = () => {

  const tokenAddress = '0xdD6913cb8EAbee7cF3d26B1D396E2e5c30cf5482';
  const tokenSymbol = 'QUANTA';
  const tokenDecimals = 12;
  const tokenImage = 'https://raw.githubusercontent.com/QuantaTechCrypto/QUANTA/main/quanta_256.png';

  async function addToken() {

    try {

      if ((window as any).ethereum) {

        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

        const wasAdded = await (window as any).ethereum.request({

          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },

          },

        });

        if (wasAdded) console.log('Thanks for your interest!');
        else console.log('Your loss!');

      } else console.log('MetaMask is not installed!');

    } catch (e) { console.log(e); }
    
  }

  return (

    <div className="App">

      <button className="button animated" onClick={addToken}>

        Add Token

      </button>

    </div>

  );

};
