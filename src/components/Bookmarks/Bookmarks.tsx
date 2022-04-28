import React from 'react'
import { useAppSelector } from '../../store/hooks';
import Styles from './bookmark.module.css';

const Bookmarks = () => {
    const {savedBook} = useAppSelector((state) => state.books);
  return (
    <div className={Styles.bookmark}>
        {savedBook.map((book, idx) => (

        <div className={Styles.item} key={idx}>
            <img src={book.cover_url} alt="" />
            <h5>{book.title}</h5>
        </div>
        ))}
    </div>
  )
}

export default Bookmarks