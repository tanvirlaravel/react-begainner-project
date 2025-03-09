function Pagination({ totalPages, page, onPagination }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button id="prev-page" disabled={page === 1}>
        Previous
      </button>
      {pages &&
        pages.map((pageNumber) => (
          <button
            className={`page-info ${pageNumber === page ? 'active' : ''}`}
            key={page}
            onClick={() => onPagination(pageNumber)}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </button>
        ))}

      <button id="next-page" disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
export default Pagination;
