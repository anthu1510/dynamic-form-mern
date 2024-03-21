import React, { useState } from "react";
import { IFormField, IFormEditorProps } from "../../../types/form.type";


const FormEditor: React.FC<IFormEditorProps> = ({ formfields, setFormFields }) => {
  const [dropdown, setDropDown] = useState<{ index: number, value: string }>({ index: -1, value: '' })
  // const [formfields, setFormFields] = useState<IFormField[]>([
  //   { type: "text", label: "Text Field", value: "" },
  //   { type: "textarea", label: "Textarea Field", value: "" },
  //   {
  //     type: "checkbox",
  //     label: "Checkbox Field",
  //     options: ["Option 1", "Option 2"],
  //     selectedOptions: [],
  //   },
  //   {
  //     type: "radio",
  //     label: "Radio Field",
  //     options: ["Option 1", "Option 2"],
  //     selectedOption: "",
  //   },
  //   {
  //     type: "select",
  //     label: "Select Field",
  //     options: ["Option 1", "Option 2"],
  //     selectedOption: "",
  //   },
  // ]);



  const handleInputLabelChange = (index: number, value: string) => {
    const newFormFields = [...formfields.fields];
    newFormFields[index].label = value;
    setFormFields({ ...formfields, fields: newFormFields });
  };

  const handleInputChange = (index: number, value: string) => {
    const newFormFields = [...formfields.fields];
    newFormFields[index].value = value;
    setFormFields({ ...formfields, fields: newFormFields });
  };

  const handleCheckboxChange = (index: number, option: string) => {
    const newFormFields = [...formfields.fields];
    const optionIndex = newFormFields[index].selectedOptions?.indexOf(option);
    if (optionIndex === -1) {
      newFormFields[index].selectedOptions?.push(option);
    } else {
      optionIndex !== undefined &&
        newFormFields[index].selectedOptions?.splice(optionIndex, 1);
    }
    setFormFields({ ...formfields, fields: newFormFields });
  };

  const handleSelectChange = (index: number, value: string) => {
    const newFormFields = [...formfields.fields];
    newFormFields[index].selectedOption = value;
    setFormFields({ ...formfields, fields: newFormFields });
  };

  const handleRadioChange = (index: number, value: string) => {
    const newFormFields = [...formfields.fields];
    newFormFields[index].selectedOption = value;
    setFormFields({ ...formfields, fields: newFormFields });
  };

  const handleFieldsChange = (index: number, value: string) => {
    setDropDown({ index, value })
    if (value === 'checkbox') {
      const newFormFields = [...formfields.fields];
      const newheckboxfield = {
        type: "checkbox",
        label: "Checkbox Field",
        options: ["Option 1", "Option 2"],
        selectedOptions: [],
      }
      newFormFields[index] = newheckboxfield;
      setFormFields({ ...formfields, fields: newFormFields });
    }
  };


  const dynamicInputRender = (index: number, field: IFormField) => {
    switch (dropdown.value) {
      case "text":
        return (
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={field.value}
              placeholder="Answer box"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        );
        break;
      case "textarea":
        return (
          <div className="mt-3">
            <textarea
              className="form-control"
              id="floatingTextarea"
              value={field.value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        );
        break;
      case "checkbox":
        return (
          <div className="mt-3">
            {field.options?.map((option) => (
              <div key={option} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id={option}
                  checked={field.selectedOptions?.includes(option)}
                  onChange={() => handleCheckboxChange(index, option)}
                />
                <label className="form-check-label" htmlFor={option}>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Question"
                      value={option}
                      onChange={() => handleCheckboxChange(index, option)}
                  />
                </label>
              </div>
            ))}
          </div>
        );
        break;
      case "select":
        return (
          <div className="mt-3">
            <select
              className="form-select"
              aria-label="Default select example"
              value={field.selectedOption}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option>Open this select menu</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
        break;
      case "radio":
        return (
          <div className="mt-3">
            {field.options?.map((option) => (
              <div key={option} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={option}
                  checked={field.selectedOption === option}
                  onChange={() => handleRadioChange(index, option)}
                />
                <label className="form-check-label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
        break;
      default:
        return null;
    }
  };

  return (
    <form>
      {formfields.fields.length > 0 && formfields.fields.map((field, index) => (
        <div key={index} className="mb-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Question"
                    value={field.label}
                    onChange={(e) => handleInputLabelChange(index, e.target.value)}
                  />
                </div>
                <div className="col-lg-4">
                  <select className="form-select" onChange={(e) => handleFieldsChange(index, e.target.value)}>
                    <option selected value="">Select The Fields</option>
                    <option value="text">Short Answer</option>
                    <option value="textarea">Paragraph</option>
                    <option value="checkbox">Multiple Choice</option>
                    <option value="radio">Checkboxes</option>
                    <option value="select">Dropdowns</option>
                  </select>
                </div>
              </div>
              <div className="row">
                {dropdown.value !== "" && dynamicInputRender(index, field)}
                {/* {index === } */}
                {/* {dynamicInputRender(index, field)} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </form>
  );
};

export default FormEditor;
