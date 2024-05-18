import { useState } from "react";

const Pagination = () => {
    const totalPages = 10; // example number of total pages
    const [currentPage, setCurrentPage] = useState<number>(1);

    function handlePageChange(page: number) {
        setCurrentPage(page);
    }

    return (
        <div className="flex items-center justify-center mt-[50px]">
            {/* Previous button */}
            <button
                className="px-2 text-white bg-blue-500 rounded-l hover:bg-blue-700 focus:outline-none h-10 w-10"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Prev
            </button>
            {/* Numbers */}
            <div className="flex mx-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`p-2 mx-1 rounded-md h-10 w-10 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-gray-300 focus:outline-none'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            {/* Next button */}
            <button
                className="p-2 text-white bg-blue-500 rounded-r hover:bg-blue-700 focus:outline-none"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;