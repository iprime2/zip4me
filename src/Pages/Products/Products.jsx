import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
import useFetch from '../../hooks/useFetch'

const Products = () => {
  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState()
  const [cat, setCat] = useState()
  const [selectedSubCats, setSelectedSubCats] = useState([])

  //const [data, loading, error] = useFetch(`/products?qCatogerios=${cat}`)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    )
  }

  //console.log(selectedSubCats)
  console.log(cat)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {/*data?.map((item) => (
            <div className='inputItem' key={item.id}>
              <input
                type='checkbox'
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor='1'>{item.attributes.title}</label>
            </div>
          ))*/}
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) => setCat('men')}
            />
            <label htmlFor='asc'>Men</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              onChange={(e) => setCat('women')}
            />
            <label htmlFor='desc'>Women</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              min={200}
              max={4000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>4000</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor='asc'>Price (Lowest First)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor='desc'>Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
          cat={cat}
        />
      </div>
    </div>
  )
}

export default Products
