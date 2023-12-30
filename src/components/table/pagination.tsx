import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const gotoPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const canPreviousPage = currentPage > 1;
    const canNextPage = currentPage < totalPages;

    const renderPageButtons = () => {
        const pageButtons = [];
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;

        if (previousPage > 0) {
            pageButtons.push(
                <li key={previousPage}>
                    <button
                        onClick={() => gotoPage(previousPage)}
                        className={`px-3 py-2 leading-tight ${previousPage === currentPage
                                ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        {previousPage}
                    </button>
                </li>,
            );
        }

        pageButtons.push(
            <li key={currentPage}>
                <button
                    onClick={() => gotoPage(currentPage)}
                    className={`px-3 py-2 leading-tight ${currentPage === currentPage
                            ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                            : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        }`}
                >
                    {currentPage}
                </button>
            </li>,
        );

        if (nextPage <= totalPages) {
            pageButtons.push(
                <li key={nextPage}>
                    <button
                        onClick={() => gotoPage(nextPage)}
                        className={`px-3 py-2 leading-tight ${nextPage === currentPage
                                ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        {nextPage}
                    </button>
                </li>,
            );
        }

        return pageButtons;
    };

    return (
        <div>
            <ul className="inline-flex -space-x-px mt-3 flex-wrap">
                <li>
                    <button
                        onClick={() => gotoPage(currentPage - 1)}
                        disabled={!canPreviousPage}
                        className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#111827] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 256 512"
                        >
                            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                        </svg>
                    </button>
                </li>
                {renderPageButtons()}
                <li>
                    <button
                        onClick={() => gotoPage(currentPage + 1)}
                        disabled={!canNextPage}
                        className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#111827] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 256 512"
                        >
                            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;