// import logo from './logo.svg';
// import './App.css';

import Block1 from "./components/Block1";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inp from "./components/Inp";
import Newsection from "./components/Newsection";
import Section from "./components/Section";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Block1 />
      <Newsection />
      <Team />
      <Inp/>
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
