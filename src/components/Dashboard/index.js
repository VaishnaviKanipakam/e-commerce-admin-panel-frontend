import React from 'react'
import { useState, useEffect} from 'react';
import Headers from '../Headers'
import SideBarItems from "../SideBarItems"
import CategoryItem from "../CategoryItem"
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './index.css'

const Dashboard = () => {
    const [categoriesList, setCategoriesList] = useState([])

    useEffect (() => {
        const getCategoriesList = async () => {
            const url = "http://localhost:3004/get_category"

            const options = {
                method: "GET"
            }
            const response = await fetch(url, options)
            if (response.ok === true){
                const data = await response.json()
                const updatedData = data.map(eachCategory => ({
                    categoryId: eachCategory.category_id,
                    categoryImage: eachCategory.category_image,
                    categoryName: eachCategory.category_name,
                    itemCount: eachCategory.item_count
                }))
                setCategoriesList(updatedData)
            }
        }
        getCategoriesList()
    }, [])


  return (
    <div className='dashboard-container'>
        <Headers />
      <div className='dashboard-bottom-container'>
        <div className='side-menu-bar-container'> 
            <SideBarItems />
        </div>
            <div className='category-container'>
                <div className='heading-button-container'>
                    <h1 className='category-heading'>Categories</h1>
                        <Button  variant="contained" style={{backgroundColor: "blue"}}>
                        <AddOutlinedIcon /> Add Category
                        </Button>
                </div> 
                <ul className='categories-list-conatiner'>
                    {categoriesList.map(eachCategory => (
                      <CategoryItem key={eachCategory.categoryId} categoryDetails={eachCategory}/>
                    ))}    
                </ul> 
            </div>
      </div>
    </div>
  )
}

export default Dashboard
