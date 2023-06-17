import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import {
  AddCategory,
  AddItem,
  ItemDetailContainer,
  ItemsListContainer,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemsListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/Item-detail/:id" element={<ItemDetailContainer />} />

          <Route path="/" element={<AddCategory />} />
          <Route path="/" element={<AddItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;