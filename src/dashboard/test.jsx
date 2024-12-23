const handleText = () => {
    const divEle = document.getElementById('input-fields')
    const contentEle = document.createElement('div')
    const iField = document.createElement('textarea');
    const tValue = document.createElement('p')
    const timeStamp = Date.now()
    const deleteButton = document.createElement('button')
    contentEle.appendChild(deleteButton)
    deleteButton.textContent = 'X'
    deleteButton.classList.add('button')
    iField.setAttribute('type','text')
    // iField.setAttribute('wrap', 'hard')
    contentEle.setAttribute('id', `${timeStamp}c`)
    iField.setAttribute('id', timeStamp)
    iField.setAttribute('as', Sol)
    tValue.setAttribute('id', `${timeStamp}v`)
    tValue.setAttribute('display', 'none')
    deleteButton.setAttribute('id', `${timeStamp}b`)
    iField.setAttribute('placeholder','Start paragraph')
    contentEle.classList.add('content')
    iField.classList.add('input-fields')
    divEle.appendChild(contentEle)
    // iField.textContent = 'iuih'
    contentEle.appendChild(iField)
    contentEle.appendChild(tValue)
    iField.addEventListener('input', (e) => {
        tValue.value = e.target.value
        // iField.onkeydown = () => {
        // 	tValue.value += e.
        // }
        console.log(tValue.value)
    })
    iField.addEventListener('input', autoSize)
    function autoSize() {
        const el = this
        setTimeout(function() {
            // el.style.cssText = 'height: auto'
            el.style.cssText = 'height:' + el.scrollHeight+ 'px'
        })
    }
    setRes([...res, {'text': iField.id}])
    
    deleteButton.onclick = () => {
        deleteTxtContent(timeStamp)
        const contentEle = document.getElementById(`${timeStamp}c`)
        const ele = document.getElementById(timeStamp)
        const button = document.getElementById(`${timeStamp}b`)
        contentEle.removeChild(ele)
        contentEle.removeChild(button)
        divEle.removeChild(contentEle)
    }
    
  };




  const handleSelection = () => {
    // const element = getElementById(id)
    // const getSelected_txt = () => {
    // onOpen()
    // let selected_txt = window.getSelection().toString()
    if(selected_txt && link.length > 3) {
        console.log('dod')
        const exe = document.querySelectorAll('textarea')
        // console.log(exe)
        for(let i=0; i < exe.length; i++) {
            if(exe[i].value.includes(selected_txt)) {
                console.log('dojs')
                let tValue = document.getElementById(`${exe[i].id}v`)
                let txt = tValue.value || exe[i].value 
                let hi = exe[i].value
                let post_link = document.createElement('a')
                post_link.classList.add('post-link')
                // post_link.href = link
                post_link.value = selected_txt
                console.log(post_link)
                exe[i].value = hi.replace(selected_txt, `[-${selected_txt}-] `)
                exe[i].appendChild(post_link)
                tValue.value = txt.replace(selected_txt, `[-${link}:${selected_txt}-] `)
                // exe[i].substr(0,3)
                console.log(tValue.value)
                const re = tValue.value
                const ri = re.replace(/\[.*?]/g, '<a></a>')
                console.log(ri)
                setSelected_txt('')
                onClose()
                return
            }
        }
    }else {
        setSelected_txt('')
        onClose()
        return
    }		
}




const unLinkSelection = () => {
    if(selected_txt && link.length > 3) {
        // console.log('dod')
        const exe = document.querySelectorAll('textarea')
        // console.log(exe)
        for(let i=0; i < exe.length; i++) {
            if(exe[i].value.includes(selected_txt)) {
                let tValue = document.getElementById(`${exe[i].id}v`)
                let txt = tValue.value || exe[i].value 
                let hi = exe[i].value
                if(selected_txt[0] === '[' && selected_txt[selected_txt.length -1] === ']'){
                    // console.log('so')
                    let st = selected_txt.replace('[-', '').replace('-]', '')
                    let stl = '[-' + link + ':' + st + '-]'
                    // console.log(stl)
                    exe[i].value = hi.replace(selected_txt, `${st}`)
                     tValue.value = txt.replace(stl, `${st}`)
                    // console.log(tValue.value)
                    setSelected_txt('')
                    onClose()
                return
                }
            }
        }
    }else {
        setSelected_txt('')
        onClose()
        return
    }		
}

const handleImg = (selectedFile) => {
  imgRef.current.click()
 const divEle = document.getElementById('input-fields')
 if(selectedFile) {
   console.log('dodi')
   // const alts = prompt('Enter image alt description')
     const contentEle = document.createElement('div')
     const img = document.createElement('img')
     const timeStamp = Date.now()
     const alt = document.createElement('input')
     const button = document.createElement('button')
   contentEle.classList.add('content')
     img.setAttribute('src', selectedFile)
     img.classList.add('img-fields')
   contentEle.setAttribute('id', `${timeStamp}c`)
     img.setAttribute('id', timeStamp)
     button.setAttribute('id', `${timeStamp}b`)
     divEle.appendChild(contentEle)
   contentEle.appendChild(img)
     alt.setAttribute('type','text')
     alt.setAttribute('placeholder','Enter Image Alt')
   // alt.value = alts
     alt.classList.add('alt-field')
     contentEle.appendChild(alt)
     contentEle.appendChild(button)
     button.classList.add('button')
   button.textContent = 'X'
   console.log(selectedFile)
   // if(alt.length > 2) {
     setRes([...res, {'img': {'url':selectedFile,
          'alt':alt.value
         }}]) 
   // }
     button.onclick = async () => {
     // console.log(alt.value.length)
         const contentEle = document.getElementById(`${timeStamp}c`)
       const ele = document.getElementById(timeStamp)
       const button = document.getElementById(`${timeStamp}b`)
       contentEle.removeChild(ele)
       contentEle.removeChild(button)
       divEle.removeChild(contentEle)
       deleteImgContent(selectedFile)
     }
   }
 // const alts = prompt('Enter image alt description')
 // setTimeout(() => {
 // 	// const alts = prompt('Enter image alt description')
 // 	console.log(jo)
 //     const contentEle = document.createElement('div')
 //     const img = document.createElement('img')
 //     const timeStamp = Date.now()
 //     // const alt = document.createElement('p')
 //     const button = document.createElement('button')
 // 	contentEle.classList.add('content')
 //     img.setAttribute('src', selectedFile)
 //     img.classList.add('img-fields')
 // 	contentEle.setAttribute('id', `${timeStamp}c`)
 //     img.setAttribute('id', timeStamp)
 //     button.setAttribute('id', `${timeStamp}b`)
 //     divEle.appendChild(contentEle)
 // 	contentEle.appendChild(img)
 //     // alt.setAttribute('type','text')
 //     // alt.setAttribute('placeholder','Enter Image Alt')
 // 	// alt.value = alts
 //     // alt.classList.add('alt-field')
 //     // contentEle.appendChild(alt)
 //     contentEle.appendChild(button)
 //     button.classList.add('button')
 // 	button.textContent = 'X'
 // 	if(alts.length > 2) {
 // 		setRes([...res, {'img': {'url':img.src,
 // 	       'alt':alts
 //         }}]) 
 // 	}
 //     button.onclick = async () => {
 // 		// console.log(alt.value.length)
 //         const contentEle = document.getElementById(`${timeStamp}c`)
 // 	    const ele = document.getElementById(timeStamp)
 // 	    const button = document.getElementById(`${timeStamp}b`)
 // 	    contentEle.removeChild(ele)
 // 	    contentEle.removeChild(button)
 // 	    divEle.removeChild(contentEle)
 // 	    deleteImgContent(selectedFile)
 //     }
 // }, );
}

<MyErrorBoundary>
    <Container maxW={'8xl'}>
        <Box w={'full'} py={4}>
        <Flex gap={5} w={'full'} flexDir={{base: 'column' , lg:'row'}}>
            {isLoadingDoc ? (
             <VStack gap={3} alignItems={"flex-start"} w={{md: 'full', xl: '69%'}} mb={10}>
              <Skeleton w={"full"}>
                <Box h={"500px"}>contents wrapped</Box>
              </Skeleton>
              <Skeleton height={"10px"} w={"200px"}/>
              <Skeleton height={"40px"} w={"full"}/>
             </VStack>
            )
            : (
              // <Box w={{md: 'full', xl: '69%'}} as={RouterLink} to={`posts:${bRNews[0].headerText}`}  cursor={'pointer'}>
              <Box w={{md: 'full', xl: '69%'}} onClick={() => navigate(`posts:${bRNews[0].headerText}`)}  cursor={'pointer'}>
               <Box position={'relative'}> 
                <Image src={bRNews[0].image.url} fallbackSrc='../../../public/fallback-image.jpg' alt={bRNews[0].image.alt} objectFit={'cover'} w={'full'} pb={2}/>
                <Button background={'#242a56'} position={'absolute'} bottom={'8px'} p={2} borderRadius={'unset'} color={'white'} w={'160px'} textTransform={'uppercase'}>{bRNews[0].category}</Button>
               </Box>
                <Text py={2} fontWeight={'bold'} fontSize={'large'} color={'red'}>Breaking News</Text>
                <Text fontWeight={'bold'} fontSize={'large'}> {bRNews[0].headerText} </Text>
                <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> {bRNews[0].createdAt}, {data[0].commentsNum} comments </Text>
            </Box>
            )}
            <Flex w={{sm: 'full', xl: '30%'}} flexDir={{md: 'row' ,lg: 'column'}} gap={{md: '3' ,lg: '0'}}>
              {isLoadingDoc && [0,1].map(() => (
                <VStack alignItems={'flex-start'} w={'full'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"220px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"200px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
              ))}
    
              {!isLoadingDoc && bRNews.slice(1,3).map((post) => (
               <VStack key={post.id} w={'full'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2} >
                <Box position={'relative'}>
                 <Image src={post.image.url} alt={post.image.alt} objectFit={'cover'} w={'full'} as={RouterLink} to={`posts:${post.headerText}`} />
                 <Button background={'#242a56'} position={'absolute'} bottom={'0px'} p={1} borderRadius={'unset'} color={'white'} w={'160px'} as={RouterLink} to={'/news'} textTransform={'uppercase'}>{post.category}</Button>
                </Box>
                <Box w={'full'} as={RouterLink} to={`posts:${post.headerText}`}>
                 <Text color={'black'}> {post.headerText} </Text>
                 <Text fontWeight={'unset'} fontSize={'small'} opacity={0.5}> {post.createdAt},  06 </Text>
                </Box>
               </VStack>
              ))}
            </Flex>
        </Flex>
        </Box>
        
      
    </Container>
    <Box py={4} w={'full'}>
        <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'} py={5} textAlign={'center'}>Latest News</Text>
        <Flex gap={4} w={'100%'} className='dd' p={3} justifyContent={{sm:"unset", md:'center'}}>
           {isLoading && [0,1,2].map(() => (
                <VStack w={{sm: '276px', md: '31%'}} alignItems={'flex-start'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"270px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"220px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
           ))}      
           {!isLoading && posts.slice(0,3).map((post) => (
            <Card align='center' key={post.id} flexShrink={0} flexBasis={'calc(100% - 1.5rem)'} maxW={{sm: '276px', md: '31%'}} bg={'white'} boxShadow={'0 5px 15px rgba(0,0,0,.5)'} borderRadius={'5px'} w={{sm: '276px', md: '31%'}}>
               <Image src={post.image.url} alt={post.image.alt} w={'full'} as={RouterLink} to={`posts:${post.id}`} cursor={'pointer'} borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'}/>
              <CardBody fontWeight={'bold'} fontSize={'larger'} as={RouterLink} to={`posts:${post.id}`} cursor={'pointer'}>
                <Text color={'red'} textTransform={'uppercase'} > {post.category} </Text>
                <Text color={'black'}> {post.headerText} </Text>
              </CardBody>
              <CardFooter>
                <Text></Text>
              </CardFooter>   
          </Card>
           ))}
        </Flex>
        <Container maxW={'9xl'} py={4}>
          <Flex gap={3} py={4} marginTop={'30px'} wrap={'wrap'} justifyContent={'center'}>
            {isLoading && [0,1,2,3,4,5].map(() => (
                <VStack w={{sm: '276px', md: '31%'}} alignItems={'flex-start'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"270px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"220px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
            ))} 
            {!isLoading && posts.slice(3,9).map((post) => (
              <>
               <Flex w={{sm: 'full', md: '29%'}} key={post.id} as={RouterLink} to={`posts:${post.headerText}`} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
                 <Image src={post.image.url} alt={post.image.alt} w={{base: "40%", md:'full'}} objectFit={'contain'} alignSelf={'flex-start'}/>
                 <Box>
                   <Text color={'red'} m={0} textAlign={"start"} w={'full'} fontWeight={'bold'} py={2}> {post.category} </Text>
                   <Text fontWeight={'800'}> {post.headerText} </Text>
                 </Box>
               </Flex>
              </>
            ))}
          </Flex>
        </Container>
      </Box>
      <Container maxW={'8xl'}>
        <Flex py={3} gap={3} w={'full'} wrap={'wrap'} justifyContent={{base: 'center', sm: 'normal'}}>      
            <VStack backgroundColor={'#d9e5f391'} w={{base: 'full', sm: 'full', md: '48%', lg: '34%'}}>
                <Box backgroundColor={'#242a56'} color={'white'} w={'96%'} px={3} mt={5} fontWeight={'800'} >Relevant Stories</Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
            <VStack backgroundColor={'#d9e5f391'} w={{base: 'full', sm: 'full', md: '48%', lg: '34%'}}>
            <Box backgroundColor={'#242a56'} color={'white'} w={'96%'} px={3} mt={5} fontWeight={'800'} >Editors Pick</Box>
                <NewsList />
                <NewsList />
                <NewsList />
                <NewsList />
            </VStack>
         </Flex>
      </Container>

      <> 
        {isLoading && [1].map((_,idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} w={{sm: 'full', md: '31%',lg: '24%'}} mb={10}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
            <Skeleton height={"10px"} w={"200px"}/>
            <Skeleton height={"40px"} w={"full"}/>
          </VStack>
        ))}
  
        {!isLoading && 
          <>
           <Flex w={{sm: 'full', md: '31%',lg: '24%'}} key={post?.id} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
              <Image src={post?.image?.url} fallbackSrc='/../../../fallback-image.jpg' alt={post?.image?.alt} w={{base: "40%", md:'full'}} objectFit={'contain'} alignSelf={'flex-start'}/>
            <Box>
              <Text color={'red'} m={0} textAlign={"start"} w={'full'}> {post?.category} </Text>
              <Text fontWeight={'bold'}> {post?.headerText} 0 </Text>
            </Box>
          </Flex>
          </>
        }
    </>
    </MyErrorBoundary>


<Box py={4} w={'full'}>
        <Text textTransform={'uppercase'} fontWeight={800} fontSize={'20px'} py={5} textAlign={'center'}>Latest News</Text>
        <Flex gap={4} w={'100%'} className='dd' p={3} justifyContent={{sm:"unset", md:'center'}}>
           {isLoading && [0,1,2].map(() => (
                <VStack w={{sm: '276px', md: '31%'}} alignItems={'flex-start'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"270px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"220px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
           ))}      
           {!isLoading && posts.slice(0,9).map((post) => (
            <VStack align='center' key={post?.id} flexShrink={0} flexBasis={'calc(100% - 1.5rem)'}
              maxW={{sm: '276px', md: '25%'}} bg={'white'} boxShadow={'0 5px 15px rgba(0,0,0,.5)'} borderRadius={'5px'} 
              w={{sm: '276px', md: '25%'}}
            >
              {/* <Link to={`/posts:${post?.headerText}`} style={{display: 'contents', padding: 0,margin:0,}}> */}
                <Image src={post?.image?.url} alt={post?.image?.alt} loading='lazy' decoding='async' w={'full'} cursor={'pointer'} display={'block'}
                  borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'} maxW={'100%'} h={{sm: '150px', md: '150px'}}  objectFit={'cover'} 
                  onClick={() => useNavigate(`/posts:${post?.headerText}`)}
                />
              {/* </Link> */}
              <Box fontWeight={'bold'} w={'full'} fontSize={'larger'} px={2} py={0} m={0} cursor={'pointer'}>
                <Link to={`/posts:${post?.headerText}`}><Text color={'red'} py={1} textTransform={'uppercase'} > {post?.category || 'dodod'} </Text></Link>
                <Text color={'black'} py={0}> {post?.headerText}</Text>
              </Box>
              {/* <VStackFooter>
                <Text></Text>
              </VStackFooter>    */}
            </VStack>
           ))}
        </Flex>
        <Container maxW={'9xl'} py={4}>
          <Flex gap={3} py={4} marginTop={'30px'} wrap={'wrap'} justifyContent={'center'}>
            {isLoading && [0,1,2,3,4,5].map(() => (
                <VStack w={{sm: '276px', md: '31%'}} alignItems={'flex-start'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"270px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"220px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
            ))} 
            {!isLoading && posts.slice(3,9).map((post) => (
              <>
               <Flex w={{sm: 'full', md: '29%'}} key={post?.id} to={`posts:${post?.headerText}`} direction={{base: 'row', md:"column"}} gap={{base: 3, md:0}}>
                 <Link to={`/posts:${post?.headerText}`}>
                    <Image src={post?.image?.url} alt={post?.image?.alt} w={{base: "40%", md:'full'}} objectFit={'contain'} alignSelf={'flex-start'}/>
                 </Link>
                 <Box>
                   <Link to={`/posts:${post?.headerText}`}>
                     <Text color={'red'} m={0} textAlign={"start"} w={'full'} fontWeight={'bold'} py={2}> {post?.category} </Text>
                   </Link>
                   <Text fontWeight={'800'}> {post?.headerText} </Text>
                 </Box>
               </Flex>
              </>
            ))}
          </Flex>
        </Container>
    </Box>


{/* <div className='top_ten_scroll'>
           {isLoading && [0,1,2].map(() => (
                <VStack w={{sm: '276px', md: '31%'}} alignItems={'flex-start'} cursor={'pointer'} fontWeight={'bold'} fontSize={'larger'} pb={2}>
                  <Skeleton w={"full"}>
                    <Box h={"270px"}>contents wrapped</Box>
                  </Skeleton>
                  <Skeleton height={"10px"} w={"220px"}/>
                  <Skeleton height={"40px"} w={"full"}/>
                </VStack>
           ))}      
           {!isLoading && posts.slice(0,9).map((post) => (
            <OrderedList className='top_ten_scroll_wrapper'>
              <ListItem className='top_ten_listitem' to={`/posts:${post?.headerText}`} w={'22vw'}>
                <Link to={`/posts:${post?.headerText}`} style={{display: 'contents', padding: 0,margin:0,}}>
                <Image src={post?.image?.url} alt={post?.image?.alt} loading='lazy' decoding='async' w={'full'} cursor={'pointer'} display={'block'}
                  borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'} maxW={'100%'} h={{sm: '250px', md: '250px'}}  objectFit={'cover'} 
                  onClick={() => navigate(`/posts:${post?.headerText}`)}
                />
                </Link>
                <Box fontWeight={'bold'} w={'full'} fontSize={'larger'} px={2} py={0} m={0} cursor={'pointer'}>
                  <Link to={`/posts:${post?.headerText}`}><Text color={'gray'} py={1}> {post?.category || '21 hours ago'} </Text></Link>
                  <Text color={'black'} py={0}> {post?.headerText}</Text>
                </Box>
              </ListItem>
            </OrderedList>
           ))}
        </div> */}


        // <VStack align='center' key={post?.id} flexShrink={0} flexBasis={'calc(100% - 1.5rem)'}
            //   maxW={{sm: '276px', md: '25%'}} bg={'white'} boxShadow={'0 5px 15px rgba(0,0,0,.5)'} borderRadius={'5px'} 
            //   w={{sm: '276px', md: '25%'}}
            // >
            //   {/* <Link to={`/posts:${post?.headerText}`} style={{display: 'contents', padding: 0,margin:0,}}> */}
            //     <Image src={post?.image?.url} alt={post?.image?.alt} loading='lazy' decoding='async' w={'full'} cursor={'pointer'}
            //       borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'} maxW={'100%'}  objectFit={'cover'} 
            //       onClick={() => useNavigate(`/posts:${post?.headerText}`)}
            //     />
            //   {/* </Link> */}
            //   <Box fontWeight={'bold'} w={'full'} fontSize={'larger'} px={2} py={0} m={0} cursor={'pointer'}>
            //     <Link to={`/posts:${post?.headerText}`}><Text color={'red'} py={1} textTransform={'uppercase'} > {post?.category || 'dodod'} </Text></Link>
            //     <Text color={'black'} py={0}> {post?.headerText}</Text>
            //   </Box>
            //   {/* <VStackFooter>
            //     <Text></Text>
            //   </VStackFooter>    */}
            // </VStack>











// color: rgb(232, 234, 237); font-family: consolas, 
// "lucida console", "courier new", monospace; font-size: 12px;
//  font-weight: 400; white-space: pre; background-color: rgb(32, 33, 36);



const useGetAllPosts = (num) => {
  const [isLoading, setIsLoading] = useState(true)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
//   const userProfile = useUserProfileStore((state) => state.userProfile)
console.log(posts)
  useEffect(() => {
    const getPosts = async() => {
        // if(!userProfile) return
        setIsLoading(true)
        setPosts([])
        try {
            const q = query(collection(firestore, 'posts'), limit(num))
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)
            setPosts(posts)
        } catch (error) {
          console.error(error.message)
            showToast('Error', error.message,'error')
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()
    window.addEventListener('online', getPosts)
  },  [setPosts, showToast])
  return {isLoading, posts}
}