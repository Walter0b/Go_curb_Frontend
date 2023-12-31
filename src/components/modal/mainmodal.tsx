import DynamicForm from ".";
export default function Fields() {

    const fields = [
        { id: 'first-name', label: 'First Name', type: 'text', autoComplete: 'given-name', span: 3 },
        { id: 'last-name', label: 'Last Name', type: 'text', autoComplete: 'family-name', span: 3 },
        { id: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', span: 4 },
        { id: 'country', label: 'Country', type: 'select', autoComplete: 'country-name', span: 4 },
        { id: 'street-address', label: 'Street Address', type: 'text', autoComplete: 'street-address', span: 6 },
        { id: 'city', label: 'City', type: 'text', autoComplete: 'address-level2', span: 2 },
        { id: 'region', label: 'State / Province', type: 'text', autoComplete: 'address-level1', span: 2 },
        { id: 'postal-code', label: 'ZIP / Postal Code', type: 'text', autoComplete: 'postal-code', span: 2 },
    ];


    return (<DynamicForm fields={fields} />)
}