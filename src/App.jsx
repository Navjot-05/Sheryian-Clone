import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ProductOverview from './pages/Product/Overview';
import About from './pages/Company/About';
import Resources from './pages/Resources/Resources';
import NotFound from './pages/Utility/NotFound';
import Privacy from './pages/Trust/Privacy';

// Lazy loading or direct imports for now
const UnderConstruction = ({ title }) => (
  <div className="pt-40 pb-20 px-6 text-center min-h-[70vh] flex flex-col items-center justify-center">
    <h1 className="text-4xl font-display font-bold mb-4">{title}</h1>
    <p className="text-white/50">This page is currently being crafted for Sheryians 2.0.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* Product Routes */}
          <Route path="product">
            <Route path="overview" element={<ProductOverview />} />
            <Route path="features" element={<UnderConstruction title="Key Features" />} />
            <Route path="integrations" element={<UnderConstruction title="Integrations" />} />
          </Route>

          {/* Pricing */}
          <Route path="pricing" element={<Pricing />} />

          {/* Resources */}
          <Route path="resources" element={<Resources />} />

          {/* Company */}
          <Route path="about" element={<About />} />
          <Route path="careers" element={<UnderConstruction title="Join Our Team" />} />
          {/* Trust */}
          <Route path="privacy" element={<Privacy />} />

          {/* Contact */}
          <Route path="contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
