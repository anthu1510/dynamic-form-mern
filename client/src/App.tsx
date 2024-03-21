import { useState } from "react";
import AddForm from "./components/forms/addForm/addForm";

function App() {
  const [formData, setFormData] = useState({});

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mt-3">
          <button className="btn btn-primary mx-3">Add Form</button>
          <button className="btn btn-info">Preview Form</button>
        </div>
      </div>
      <div className="row">
        <AddForm />
      </div>
    </div>
  );
}

export default App;
