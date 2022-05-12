import { useRef } from 'react'
import ArrowIcon from '../../../public/icons/carouselArrow.svg'
import RecipeCard from '../RecipeCard/RecipeCard'
import './Recipes.css'
import '../LikeButton/LikeButton'

const Carousel = ({ items }) => {
  const carousel = useRef()

  const scrollLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const scrollRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <section className='recipes__container'>
      <div className='carousel'>
        <button className='carousel__arrow carousel__left-arrow' onClick={scrollLeft}>
          <img src={ArrowIcon} alt='Scroll left' />
        </button> 
        <ul className='recipes' ref={carousel}>
          {items.map((item) => {
            return (
              <RecipeCard
                key={item.id}
                image={item.image}
                title={item.title}
                tag1={item.tag1}
                tag2={item.tag2}
              />
            )
          })}
        </ul>
        <button className='carousel__arrow carousel__right-arrow' onClick={scrollRight}>
          <img src={ArrowIcon} alt='Scroll right' />
        </button>
      </div>
    </section>
  )
}

export default Carousel
