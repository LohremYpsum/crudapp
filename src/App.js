import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Layout/Navbar";
import Home from "./Home";
import Create from "./Create";
import TaskDetails from "./components/TaskDetails";
import NotFound from './components/NotFound';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<TaskDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
