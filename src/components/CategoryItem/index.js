import React from 'react'
import "./index.css"

const CategoryItem = props => {
    const {categoryDetails} = props 
    const {categoryImage, categoryName, itemCount} = categoryDetails
  return (
    <li className='category-item-container'>
      <img src={categoryImage} alt={categoryName} className='category-image'/>
      <h1 className='category-name'>{categoryName}</h1>
      <p className='item-count'>{itemCount} items</p>
    </li>
  )
}

export default CategoryItem
