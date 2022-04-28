import React, { useEffect, useState } from 'react'
import Styles from './filter.module.css';


import { useAppSelector } from "../../store/hooks"
type FilterProps = {
  clickHandler: (id: number) => void
}

const Filter = ({clickHandler}: FilterProps) => {
  const onCategoryClicked = (id: number) => {
    clickHandler(id)
    setActive(id)
  };
  const [active, setActive] = useState(0);

  const {categories} = useAppSelector((state) => state.categories);

  useEffect(() => {
    if(categories) {
      setActive(categories[0].id)
    }
  }, [categories])

  return (
    <div className={Styles.filter}>
      <p>Categories : </p>
      {categories?.map((cat, idx) => (
        <div className={`${Styles.category} ${active === cat.id ? Styles.active : ""}`} key={idx} onClick={() => onCategoryClicked(cat.id)}>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Filter