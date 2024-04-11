"use client";

import ReactPaginate from "react-paginate";
import { SpaceProps } from "styled-system";

import Icon from "@component/icon/Icon";
import { Button } from "@component/buttons";
import { StyledPagination } from "./styled";

// ==============================================================
export interface PaginationProps extends SpaceProps {
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  onChange?: (data: number) => void;
}
// ==============================================================

export default function Pagination({
  onChange,
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  ...props
}: PaginationProps) {
  const handlePageChange = async (page: any) => {
    if (onChange) onChange(page.selected);
  };

  const PREVIOUS_BUTTON = (
    <Button
      height="auto"
      padding="6px"
      color="primary"
      overflow="hidden"
      borderRadius="50%"
      className="control-button">
      <Icon defaultcolor="currentColor" variant="small">
        chevron-left
      </Icon>
    </Button>
  );

  const NEXT_BUTTON = (
    <Button
      height="auto"
      padding="6px"
      color="primary"
      overflow="hidden"
      borderRadius="50%"
      className="control-button">
      <Icon defaultcolor="currentColor" variant="small">
        chevron-right
      </Icon>
    </Button>
  );

  const BREAK_LABEL = (
    <Icon defaultcolor="currentColor" variant="small">
      triple-dot
    </Icon>
  );

  return (
    <StyledPagination {...props}>
      <ReactPaginate
        pageCount={pageCount}
        nextLabel={NEXT_BUTTON}
        breakLabel={BREAK_LABEL}
        activeClassName="active"
        disabledClassName="disabled"
        containerClassName="pagination"
        previousLabel={PREVIOUS_BUTTON}
        onPageChange={handlePageChange}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        // subContainerClassName="pages pagination"
      />
    </StyledPagination>
  );
}
