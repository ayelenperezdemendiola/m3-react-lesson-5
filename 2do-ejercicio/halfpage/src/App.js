import React from 'react';
import './App.css';
import HalfPage from './HalfPage';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <HalfPage ubication="left-container"><h2>Izquierda</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere optio voluptas tempore sit voluptate dolor enim, temporibus aliquam ipsam fuga labore! Iste maiores asperiores quasi non odit eius, rerum veritatis.</p></HalfPage>
      <HalfPage ubication="right-container"><h2>Derecha</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis odit eaque voluptas ullam natus! Tempora est in itaque iste, obcaecati assumenda quod? Odio perspiciatis sint est, possimus laborum ad!</p></HalfPage>
      </React.Fragment>
    
    );
  }
}

export default App;
