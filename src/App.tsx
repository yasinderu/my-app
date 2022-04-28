import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import {useAppDispatch, useAppSelector} from './store/hooks';
import spinner from './spinner.svg'
import {getBooks} from './store/action-creators/books';
import {getCategories} from './store/action-creators/categories';
import Filter from './components/Filter/Filter';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Pagination from './components/Pagination/Pagination';

function App() {
  const dispatch = useAppDispatch();
  const {books, loading} = useAppSelector((state) => state.books);
  const {categories} = useAppSelector((state) => state.categories);
  const [searchVal, setSearchVal] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<number>(0)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    if(categories) {
      dispatch(getBooks(categories[0].id, currentPage, 10))
      setCurrentCategory(categories[0].id)
    }
  }, [categories, dispatch])

  const data = useMemo(() => {
    if(!searchVal) {
      return books
    }
    return books?.filter(book => {
      return book.title.toLowerCase().includes(searchVal.toLowerCase()) || book.authors.join("").toLowerCase().includes(searchVal.toLocaleLowerCase())
    })
  }, [searchVal, books])

  const onCategoryChange = (id: number): void => {
    setCurrentPage(0)
    setCurrentCategory(id)
    dispatch(getBooks(id, 0, 10))
    setSearchVal("");
  }

  const changePageHandler = (page: number): void => {
    setCurrentPage(page)
    dispatch(getBooks(currentCategory,  page, 10))
  }
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Search here" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
      </form>
      <Filter clickHandler={onCategoryChange} />
      <div className='books'>

      {!loading ? data?.map((book, idx) => (

        <Books cover_url={book.cover_url} title={book.title} authors={book.authors} key={idx} />
      )) : <img src={spinner} alt="" />}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={changePageHandler} />
      <h4>Pinned Books</h4>
      <Bookmarks />
    </div>
  );
}

export default App;
