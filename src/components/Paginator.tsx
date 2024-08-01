type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

const Paginator = ({ totalPages, currentPage, paginate }: PaginatorProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handleSelectPage = (e: any) => {
    const page = Number(e.target.value);
    paginate(page);
  };

  const getPaginationButtons = () => {
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + 2, totalPages);

    if (endPage - startPage < 2) {
      startPage = Math.max(endPage - 2, 1);
    }

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={
            i === currentPage
              ? "active text-white bg-gray-400 roundes px-4 h-full rounded-full"
              : "text-gray-500 px-4 h-full"
          }
        >
          {i}
        </button>
      );
    }

    return (
      <div className="border-solid border-gray-400 border-2 h-12 rounded-full">
        {buttons}
      </div>
    );
  };

  return (
    <div className="w-auto flex items-center justify-center invisible lg:visible flex-col lg:flex-row">
      <div className="w-1/4 flex flex-col lg:flex-row"></div>
      <div className="flex space-x-2 mt-2 text-xl pb-4 justify-center items-center w-fit">
        <button
          onClick={handlePrevious}
          className="text-gray-400 rounded-full border-solid border-2 border-gray-400 p-2 w-28 visible "
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => paginate(1)}
          className={
            currentPage === 1 ? "active text-gray-400" : "text-gray-400 "
          }
        >
          1
        </button>
        <div className="">{getPaginationButtons()}</div>
        <button
          onClick={() => paginate(totalPages)}
          className={
            currentPage === totalPages
              ? "active text-gray-400"
              : "text-gray-400"
          }
        >
          {totalPages}
        </button>

        <button
          onClick={handleNext}
          className="text-gray-400 rounded-full border-solid border-2 border-gray-400 p-2 w-28 visible"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex items-center justify-end w-1/4">
        <p className=" text-gray-400">Go to Page</p>
        <select
          value={currentPage}
          onChange={handleSelectPage}
          className="flex ml-2 text-black border-solid border-b-2 border-gray-400 justify-end"
        >
          {[...Array(totalPages)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Paginator;
