import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../store/actions';
import { FormField, FetchData } from '@utils/models/struc';

interface DynamicFormProps {
    fields: FormField[];
    FetchData?: FetchData;
    openModal: () => void;
    closeModal: () => void;
}

const DynamicFormComponent: React.FC<DynamicFormProps> = ({ fields, FetchData, openModal, closeModal }) => {
    console.log("fields", fields[0].placeHolder);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        openModal();
    };


    return (
        <div className="grid z-50 gap-x-8 gap-y-8 pt-10">
            <form className="bg-white  dark:bg-gray-900 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={handleSubmit}>
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1  dark:text-white gap-x-6 gap-y-8 sm:grid-cols-6">
                        {fields.map((field) => (
                            <div key={field.id} className={`sm:col-span-${field.span}`}>
                                <label htmlFor={field.id} className="block  dark:text-white text-sm font-medium leading-6 text-gray-900">
                                    {field.label}
                                </label>
                                <div className="mt-2">
                                    {field.type === 'select' ? (
                                        <select
                                            id={field.id}
                                            name={field.id}
                                            autoComplete={field.autoComplete}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            {field?.options?.map((option) => (
                                                <option key={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : field.type === 'textarea' ? (
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
                                            placeholder={field.placeHolder}
                                            value={FetchData && FetchData[field.id] || ''}
                                            // onChange={(e) => {
                                            //     Handle input changes if needed
                                            // }}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white" onClick={closeModal}>
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

const mapStateToProps = (state: { dataTable: { isModalOpen: boolean; }; }) => ({
    isModalOpen: state.dataTable?.isModalOpen,
});

const mapDispatchToProps = {
    openModal,
    closeModal,
};

const DynamicForm = connect(mapStateToProps, mapDispatchToProps)(DynamicFormComponent);
export default DynamicForm;