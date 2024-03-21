import { useState } from "react";
import { IFormField } from "../../../types/form.type";


const FormEditor = () => {
  const [formfields, setFormFields] = useState<IFormField[]>([
    { type: "text", label: "Text Field", value: "" },
    { type: "textarea", label: "Textarea Field", value: "" },
    {
      type: "checkbox",
      label: "Checkbox Field",
      options: ["Option 1", "Option 2"],
      selectedOptions: [],
    },
    {
      type: "radio",
      label: "Radio Field",
      options: ["Option 1", "Option 2"],
      selectedOption: "",
    },
    {
      type: "select",
      label: "Select Field",
      options: ["Option 1", "Option 2"],
      selectedOption: "",
    },
  ]);

  const handleInputChange = (index: number, value: string) => {
    const newFormFields = [...formfields];
    newFormFields[index].value = value;
    setFormFields(newFormFields);
  };

  const handleCheckboxChange = (index: number, option: string) => {
    const newFormFields = [...formfields];
    const optionIndex = newFormFields[index].selectedOptions?.indexOf(option);
    if (optionIndex === -1) {
      newFormFields[index].selectedOptions?.push(option);
    } else {
      optionIndex !== undefined &&
        newFormFields[index].selectedOptions?.splice(optionIndex, 1);
    }
    setFormFields(newFormFields);
  };

  const handleSelectChange = (index: number, value: string) => {
    const newFormFields = [...formfields];
    newFormFields[index].selectedOption = value;
    setFormFields(newFormFields);
  };

  const handleRadioChange = (index: number, value: string) => {
    const newFormFields = [...formfields];
    newFormFields[index].selectedOption = value;
    setFormFields(newFormFields);
  };

  const dynamicInputRender = (index: number, field: IFormField) => {
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={field.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        );
      case "textarea":
        return (
          <textarea
            className="form-control"
            id="floatingTextarea"
            value={field.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        );
      case "checkbox":
        return (
         <>
            {field.options?.map((option) => (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id={option}
                  checked={field.selectedOptions?.includes(option)}
                  onChange={() => handleCheckboxChange(index, option)}
                />
                <label className="form-check-label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </>
        );
      case "select":
        return (
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
        );
      case "radio":
        return (
          <>
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
            </>
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {formfields.map((field, index) => (
        <div key={index} className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {field.label}
          </label>
          {dynamicInputRender(index, field)}
        </div>
      ))}
    </form>
  );
};

export default FormEditor;
