import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"; 
import HomePage from './pages/HomePage';
import AppDetailPage from './pages/AppDetailPage';
import CategoryIndexPage from './pages/CategoryIndexPage';
import AiAppsPage from './pages/AiAppsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:id" element={<AppDetailPage />} />
            <Route path="/categories" element={<CategoryIndexPage />} />
            <Route path="/ai-apps" element={<AiAppsPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}
