import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./components/forms/formPage/formPage";
import AddForm from "./components/forms/addForm/addForm";
import FormPreview from "./components/forms/formPreview/formPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<FormPage/>}>
            <Route path="add" element={<AddForm/>}/>
            <Route path="preview" element={<FormPreview/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
