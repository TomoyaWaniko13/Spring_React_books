import { FC } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface BookPaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const BookPagination: FC<BookPaginationProps> = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  if (currentPage > 1) {
    pageNumbers.push(currentPage - 1);
  }

  if (currentPage >= 3) {
    pageNumbers.push(currentPage - 2);
  }

  pageNumbers.push(currentPage);

  if (totalPages >= currentPage + 1) {
    pageNumbers.push(currentPage + 1);
  }

  if (totalPages >= currentPage + 2) {
    pageNumbers.push(currentPage + 2);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' onClick={() => paginate(currentPage - 1)} />
        </PaginationItem>
        {pageNumbers.map((pageNumber) => (
          <PaginationItem>
            {/*TODO add disable link feature*/}
            <PaginationLink href='#' onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href='#' onClick={() => paginate(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pagination;
