import './App.css'
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/common/ContactPage';
import AboutPage from './pages/common/AboutPage';
import PrivacyPolicy from './pages/common/PrivacyPolicy';
import TermsAndConditions from './pages/common/TermsAndConditions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from './components/Cookies';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout><HomePage /></UserLayout>} />
          <Route path="/about" element={<UserLayout><AboutPage /></UserLayout>} />
          <Route path="/privacy-policy" element={<UserLayout><PrivacyPolicy /></UserLayout>} />
          <Route path="/terms-and-conditions" element={<UserLayout><TermsAndConditions /></UserLayout>} />
          <Route path="/contact" element={<UserLayout><ContactPage /></UserLayout>} />
          {/* <Route path="/menu" element={<UserLayout><MenuPage /></UserLayout>} />
          <Route path="/product/:id" element={<UserLayout><ProductDetailsPage /></UserLayout>} />
          <Route path="/cart" element={<UserLayout><CartPage /></UserLayout>} />
          <Route path="/checkout" element={<UserLayout><CheckoutPage /></UserLayout>} />
          <Route path="/login" element={<UserLayout><LoginPage /></UserLayout>} />
          <Route path="/register" element={<UserLayout><RegisterPage /></UserLayout>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ChatBot />
      <Cookies />
    </div>
  );
}

function AdminLayout({ children }) {
  return (
    <div className="flex">
      {/* <AdminNav /> */}

      <main className="flex-grow">
        {children}
      </main>

    </div>

  );
}