// Type: Paginator Component
type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};
// Paginator Component
export default function Paginator({
  totalPages,
  currentPage,
  paginate,
}: PaginatorProps) {
  // Function to handle the previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  // Function to handle the next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };
  // Function to handle the select page
  const handleSelectPage = (e: any) => {
    const page = Number(e.target.value);
    paginate(page);
  };
  // Function to get the pagination buttons based on the current page and total pages
  const getPaginationButtons = () => {
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + 2, totalPages);

    if (endPage - startPage < 2) {
      startPage = Math.max(endPage - 2, 1);
    }

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      // Add the current page button with the active class and the rest with the default class
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={
            i === currentPage
              ? "active roundes h-full rounded-full bg-gray-400 px-4 text-white"
              : "h-full px-4 text-gray-500"
          }
        >
          {i}
        </button>,
      );
    }

    return (
      <div className="h-12 rounded-full border-2 border-solid border-gray-400">
        {buttons}
      </div>
    );
  };
  // Return Paginator Component
  return (
    <div className="invisible flex w-auto flex-col items-center justify-center lg:visible lg:flex-row">
      <div className="flex w-1/4 flex-col lg:flex-row"></div>
      <div className="mt-2 flex w-fit items-center justify-center space-x-2 pb-4 text-xl">
        <button
          onClick={handlePrevious}
          className="visible w-28 rounded-full border-2 border-solid border-gray-400 p-2 text-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => paginate(1)}
          className={
            currentPage === 1 ? "active text-gray-400" : "text-gray-400"
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
          className="visible w-28 rounded-full border-2 border-solid border-gray-400 p-2 text-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex w-1/4 items-center justify-end">
        <p className="text-gray-400">Go to Page</p>
        <select
          value={currentPage}
          onChange={handleSelectPage}
          className="ml-2 flex justify-end border-b-2 border-solid border-gray-400 text-black"
        >
          // Render the options based on the total pages
          {[...Array(totalPages)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
