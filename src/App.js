import React, { Component } from "react";
import MenuUtama from './page/MenuUtama';
import MenuProduct from './page/MenuProduct';
import MenuTentangKami from './page/MenuTentangKami';
import MenuKontak from './page/MenuKontak';

class Header extends Component {
  render(){
    return (
      <div>
        <h1>Ini Halaman Untuk Header</h1>
      </div>
    );
  }
}

class Footer extends Component {
  render(){
    return (
      <div>
        <h1>Ini Halaman Untuk Footer</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

export default App;
