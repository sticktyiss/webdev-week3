import React, {useEffect} from 'react'
import AdBanner from './AdBanner'
import RecipeCard from './RecipeCard'
import axios from 'axios'

const HomeScreen = () => {  
  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com")
      .then((res) => {
        // setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <RecipeCard />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen