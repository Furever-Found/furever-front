import { useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import NoPage from "./pages/NoPage";

import MyPage from "./Owner/MyPage";
import PetInfo from "./Owner/PetInfo";
import PetList from "./Owner/PetList";

import Edit from "./Vet/Edit";
import VetList from "./Vet/VetList";
import VetInfo from "./Vet/VetInfo";

import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [currentAccount, setCurrentAccount] = useState('');

  // useEffect(() => {
  // }, [currentAccount])
  return (
    <div className="App">
       <BrowserRouter>
        <ScrollToTop/>
        <TransitionGroup>
          
          <CSSTransition timeout={300} classNames="fade">
         
          <Routes>
            <Route exact path = "/" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path='/info' element={<PetInfo />} />
            
            <Route path="/list" element={<PetList />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/vetList" element={<VetList />} />
            <Route path="/vetinfo" element={<VetInfo />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  );
}

export default App;
