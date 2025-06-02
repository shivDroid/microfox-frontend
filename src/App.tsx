import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationRefund from './pages/CancellationRefund';
import ShippingDelivery from './pages/ShippingDelivery';
import BookCallNew from './pages/BookCallNew';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/refund" element={<CancellationRefund />} />
        <Route path="/shipping" element={<ShippingDelivery />} />
        <Route path="/book-call" element={<BookCallNew />} />
        <Route path="/bookCall-new" element={<BookCallNew />} />
      </Routes>
    </Router>
  );
}

export default App;