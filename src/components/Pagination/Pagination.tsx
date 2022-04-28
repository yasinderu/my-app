import React from 'react'
import Styles from './pagination.module.css';

type PaginationProps = {
    currentPage: number,
    setCurrentPage: (page: number) => void
}

const Pagination = ({currentPage, setCurrentPage}: PaginationProps) => {
    const prevPage = (): void => {
        setCurrentPage(currentPage - 1)
    }
    const nextPage = (): void => {
        setCurrentPage(currentPage + 1);
    }
  return (
    <div className={Styles.pagination}>
        <button onClick={prevPage} disabled={currentPage <= 0}>{'<'}</button>
        <button onClick={nextPage}>{'>'}</button>
    </div>
  )
}

export default Pagination