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


export {FiltersContainer , ItemsLeft}