import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({ subCats, maxPrice, sort, catIdm, cat }) => {
  {
    /*const [data, loading, error] = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    )*/
  }

  let url

  if (cat & sort) {
    url = `/products/?category=${cat}&sort=${sort}`
  } else if (cat) {
    url = `/products/?category=${cat}`
  } else if (sort) {
    url = `/products/?sort=${sort}`
  } else if (maxPrice) {
    url = `/products/?maxPrice=${maxPrice}`
  } else {
    url = `/products/`
  }

  const [data, loading, error] = useFetch(url)

  console.log(cat)
  return (
    <div className='list'>
      {loading
        ? 'loading...'
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List
