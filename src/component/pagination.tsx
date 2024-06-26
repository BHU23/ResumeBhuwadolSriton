import React, { useState, useEffect } from "react";

interface PaginationProps {
  totalProjects: Array<any>; // Replace 'any' with the actual type of your projects data
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProjects,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<Array<number>>([]);

  useEffect(() => {
    const numPages = Math.ceil(totalProjects.length / 1); // 1 project per page
    const pagesArray = Array.from(
      { length: numPages },
      (_, index) => index + 1
    );
    setPages(pagesArray);
    setCurrentPage(1); // Reset current page when totalProjects changes
  }, [totalProjects]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages.length) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={handlePrevClick}
        className={`md:h-10 md:w-10 h-8 w-8 border-2  border-b1 hover:border-b5 hover:bg-b5 rounded-full mx-2 hover:cursor-pointer font-semibold text-xl text-b3 items-center justify-center flex ${
          currentPage === 1 && "cursor-not-allowed opacity-50 "
        }`}
        disabled={currentPage === 1}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      {pages.map((page, index) => (
        <div
          key={index}
          onClick={() => handlePageClick(page)}
          className={`md:h-10 md:w-10 h-8 w-8  border-1  border-gray rounded-full mx-2 hover:cursor-pointer font-semibold text-xl items-center justify-center flex
                ${currentPage === page && "bg-b1 text-white"}`}
        >
          {page}
        </div>
      ))}
      <button
        onClick={handleNextClick}
        className={`md:h-10 md:w-10 h-8 w-8  border-2  border-b1 hover:border-b5 hover:bg-b5 rounded-full mx-2 hover:cursor-pointer font-semibold text-xl text-b3 items-center justify-center flex ${
          currentPage === pages.length && "opacity-50 cursor-not-allowed"
        }`}
        disabled={currentPage === pages.length}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
