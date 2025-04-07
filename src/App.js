import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MessageViewer from "./Pages/MessageViewer";




export default function App() {

  

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<MessageViewer />} />
        
      </Routes>
    </Router>
  );
}

