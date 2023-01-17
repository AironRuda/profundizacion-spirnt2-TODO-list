// import React from 'react'

const FiltersContainer = ({children}) => {
  return (
    <div className=' d-flex align-items-center justify-content-between p-4 border-bottom solid'>
        {children}
    </div>
  )
}

const ItemsLeft = ({total = 0}) => {
  return (
    <p className=' text-sm-center'>
        {total} items left
    </p>
  )
}

const FilterButtonContainer = ({children}) => {
  return(
    <div className="">
      {children}
    </div>)
}

const FilterButton = ({action, active, filter}) => {
  return(
    <button className={`hover:text-white cursor-pointer transitio-all duration-300 ease-in-out`
    +(active.toLowerCase().includes(filter.toLowerCase())? "text-wite":"text-black")}>
      {filter}
    </button>)
}

export {FiltersContainer , ItemsLeft, FilterButtonContainer, FilterButton}