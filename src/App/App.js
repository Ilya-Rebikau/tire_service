import Header from '../Components/Header';
import MainPage from '../Components/MainPage';
import Services from '../Components/Services';
import AboutUs from '../Components/AboutUs';
import Contacts from '../Components/Contacts';
import Footer from '../Components/Footer';
import NotFound from '../Components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pb-5">
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}