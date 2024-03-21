export interface IFormField {
    type: string;
    label: string;
    value?: string;
    options?: string[];
    selectedOptions?: string[];
    selectedOption?: string;
}

export interface IFormAdd {
    title: string;
    description?: string;
    fields: IFormField[]
}