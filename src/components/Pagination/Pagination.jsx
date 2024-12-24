import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'


const Pagination = ({totalPosts, postsPerPage, currentPage, setCurrentPage, setDirection, dir}) => {
    const navigate = useNavigate()
    let pages = Math.ceil(totalPosts/postsPerPage)
    const setPagination = totalPosts > 14 ? true : false
    console.log(setPagination)
    const [pg, setPg] = useState([])
    useEffect(() => {
        if(currentPage === 1) {
            setPg([currentPage, currentPage+1, currentPage+2])
        }
        if(currentPage > 1){
            setPg([currentPage-1, currentPage, currentPage+1])
        }
        if(currentPage === pages){
            setPg([currentPage-2, currentPage-1, currentPage])
        }
        if(currentPage < 1) {
            setCurrentPage(1)
            setPg([currentPage, currentPage+1, currentPage+2])
        }
    }, [currentPage])
    // for (let i = 0; i < Math.ceil(totalPosts/postsPerPage); i++){
    //     pages.push(i)
    // }
    // console.log(totalPosts)

    const navigatePage = (opp) => {
        if(opp === 'inc') {
            setCurrentPage(currentPage += 1)
            navigate(`/${dir}/pages/${currentPage}`)
            setDirection('next')
        }
        if(opp === 'dec') {
            setCurrentPage(currentPage -= 1)
            navigate(`/${dir}/pages/${currentPage}`)
            setDirection('prev')
        }
    }
    const set = (p) => {
        if(p > currentPage) {
            setDirection('next')
            // console.log()
        }
        if(p < currentPage) {
            setDirection('prev')
        }
        setCurrentPage(p)
    }

  return (
    <Box>
      { setPagination &&
        <Flex justifyContent={'center'}>
            <button className='button_page' disabled={currentPage <= 1}  onClick={() => navigatePage('dec')}><ArrowLeftIcon /></button>
            <Flex>
                {pg.map((p) => (<>
                    <Link className='button_pag' to={`/${dir}/pages/${p}`} key={p} onClick={() => set(p)}> {p} </Link>
               </> ))}
            </Flex>
            <button className='button_page' disabled={currentPage >= pages-1} onClick={() => navigatePage('inc')}><ArrowRightIcon /></button>
        </Flex>
      }
    </Box>
  )
}

export default Pagination