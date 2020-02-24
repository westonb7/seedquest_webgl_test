async function RequestPermissions() {
  console.log('attempting to request permissions');
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      const accounts = await ethereum.send('eth_requestAccounts');
      const account = accounts[0];
      } catch (error) {
        console.log('User has denied permissions.');
      }
  }
}

async function getSeedPhrase() {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        console.log("Sending a request for a seed from MetaMask");
        const seed = await ethereum.send('wallet_requestSeed');
        console.log("Recieved a seed from MetaMask");
        console.log(seed);
      } catch (error) {
        console.log('Error retrieving seed from MetaMask.');
        console.log(error);
      }
  }
}
