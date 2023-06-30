import React from 'react'
import { useGlobalhook } from '../Context'

const Pagination = () => {
  const {page, nbPages, prevPage, nextPage} = useGlobalhook();
  return (
    <>
      <div className="pagination">
        <button onClick={() =>prevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={()=>nextPage()}>NEXT</button>
      </div>
    </>
  )
}

export default Pagination
