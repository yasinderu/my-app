import React from 'react'
import Styles from './books.module.css';
import {saveBook} from '../../store/action-creators/books';
import { useAppDispatch } from '../../store/hooks';

type BookProps = {
    cover_url: string;
    title: string;
    authors: Array<string>;
}

const Books = ({cover_url, title, authors}: BookProps) => {
  const dispatch = useAppDispatch()
  const saveBookHandler = (book: object): void => {
    dispatch(saveBook(book))
  }
  
  return (
    <div className={Styles.book}>
      <img src={cover_url} alt="" />
      <h4>{title}</h4>
      <span>{authors.join(', ')}</span>
      <button onClick={() => saveBookHandler({cover_url, title})}>Pin</button>
    </div>
  )
}

export default Books