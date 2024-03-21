import React, { useEffect, useState } from "react";
import { IFormAdd } from "../../../types/form.type";
import FormEditor from "../formEditor/formEditor";

const intitalState = {
    title: "Untitled form",
    description: "Form Description",
    fields: [
        { type: "text", label: "Text Field", value: "" },
    ]
}




const AddForm = () => {
    const [formData, setFormData] = useState<IFormAdd>(intitalState);

    useEffect(() => {
        console.log('changed formData');
        console.log(formData);
    }, [formData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="col-lg-6 offset-lg-3">
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="title"
                            placeholder="name@example.com"
                            value={formData.title}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="description"
                            placeholder="name@example.com"
                            value={formData.description}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <FormEditor formfields={formData} setFormFields={setFormData}/>
                </div>
            </div>
        </div>
    );
}


export default AddForm;
