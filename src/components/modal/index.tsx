import React from 'react';

interface FormField {
    id: string;
    label: string;
    type: string;
    span: number
    autoComplete: string;
}

interface DynamicFormProps {
    fields: FormField[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
    console.log(fields)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic
    };

    return (
        // <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        // <div className="px-4 sm:px-0">
        //   <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        //   <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
        // </div>

        // <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        //   <div className="px-4 py-6 sm:p-8">
        //     <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        //       <div className="sm:col-span-3">
        //         <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
        //           First name
        //         </label>
        //         <div className="mt-2">
        //           <input
        //             type="text"
        //             name="first-name"
        //             id="first-name"
        //             autoComplete="given-name"
        //             className="block w-full rounded-md bgrid max-w-2xl  gap-x-6 gap-y-8 sm:grid-cols-6order-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //           />
        //         </div>
        //       </div>
        // <div></div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={handleSubmit}>
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl  gap-x-6 gap-y-8 sm:grid-cols-6">
                            {fields.map((field) => (
                                <div key={field.id} className={`sm:col-span-${ field.span}`}>
                                    <label htmlFor={field.id} className="block text-sm font-medium leading-6 text-gray-900">
                                        {field.label}
                                    </label>
                                    <div className="mt-2">
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                id={field.id}
                                                name={field.id}
                                                autoComplete={field.autoComplete}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                name={field.id}
                                                autoComplete={field.autoComplete}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
               
                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>

    );
};

export default DynamicForm;
