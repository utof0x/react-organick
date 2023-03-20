import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Header, Footer, Home, Shop } from "components";

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/shop" Component={Shop} />
      </Routes>
      <Footer />
    </Router>
  );
};
