/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from "lodash";
const Pagination = (props) => {
  const {
    pageSize,
    length,
    onPageChange,
    currentLength,
    currentPage,
    onPrevious,
    onNext,
    onPaginationInputChange,
    PaginationInput,
  } = props;
  const totalPages = Math.ceil(length / pageSize);
  const pages = _.range(1, totalPages + 1);

  return (
    <nav>
      <span className='page-item'>
        <span className='page-link d-inline-block pagination-input'>
          Showing{" "}
          <input
            type='text'
            value={PaginationInput}
            onChange={onPaginationInputChange}
            onClick={onPaginationInputChange}
          />{" "}
          Per Page
        </span>
      </span>
      <ul className='pagination float-end'>
        <li className='page-item'>
          <a className='page-link'>{`showing ${currentLength} of ${length} items`}</a>
        </li>
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <a className='page-link pagination-link' onClick={onPrevious}>
            Previous
          </a>
        </li>
        {pages.map((page) => {
          return (
            <li key={page} className='page-item'>
              <a onClick={() => onPageChange(page)} className='page-link '>
                {page}
              </a>
            </li>
          );
        })}
        <li
          className={
            currentPage === totalPages ? "page-item disabled" : "page-item"
          }
        >
          <a onClick={onNext} className='page-link pagination-link'>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
