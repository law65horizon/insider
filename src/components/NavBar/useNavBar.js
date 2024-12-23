import React, { useEffect, useState } from 'react'

const useNavBar = () => {
  const [horizontalNav, setHorizontalNav] = useState(false)
  // console.log(horizontalNav)
  useEffect(()=> {
    setHorizontalNav(horizontalNav)
  }, [setHorizontalNav])
  return {horizontalNav, setHorizontalNav}
}

export default useNavBar