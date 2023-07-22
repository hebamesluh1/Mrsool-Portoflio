import Router from './Router/index'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Layout from "./components/Layout/Layout"
import { GlobalStyle } from "./global/style"
// Import necessary Font Awesome libraries
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function App() {
library.add(fas,fab);
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
