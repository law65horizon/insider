import React, { useEffect, useRef, useState } from 'react'
import useShowToast from '../hooks/useShowToast';
import usePostStore from '../store/postStore';
import {
	Box,
	Button,
	Card,
	CloseButton,
	Container,
	Flex,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	SelectField,
	Text,
	Textarea,
	Tooltip,
	useDisclosure,
} from "@chakra-ui/react"; 
import { Input as Sol } from '@chakra-ui/react';
import { BsFillFileImageFill, BsFillImageFill } from 'react-icons/bs';
import usePreviewImg from '../hooks/usePreviewImg';
import useAuthStore from '../store/useAuthStore';
import { useLocation } from 'react-router-dom';
import { firestore, storage } from "../FireBase/FireBase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { FieldValue, addDoc, collection,arrayUnion, updateDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
import $ from 'jquery'

const CreatePost = () => {
	const showToast = useShowToast()
    const [isVerified, setIsVerified] = useState(false)
	const [isLinked, setIsLinked] = useState(false)
	const [isOpened, setIsOpened] = useState(false)
	const {handleCreatePost, isLoading} = useCreatePost()
	const [caption, setCaption] = useState('')
	const [cat, setCat] = useState('')
	const [link, setLInk] = useState('')
	const imgRef = useRef(null)
	const [selected_txt, setSelected_txt] = useState()
	const [selected, setSelected] = useState()
	const [selectedElement, setSelectedElement] = useState()
	const {selectedFile, setSelectedFile, handleImageChange} = usePreviewImg()
	let img_src = selectedFile
	const [content, setContent] = useState({})
	const [ds, setds] = useState(false)
	const [alts, set_alts] = useState()
	const [res, setRes] = useState([])
	const {isOpen, onOpen, onClose} = useDisclosure()
	const ho = res
	console.log(res)
	var jo = selectedFile
	// console.log(selected)

	const Modall = ({modalOpen, modalClose, children}) => {
		if(!modalOpen) {
			return
		}
		return ReactDOM.createPortal(
			<div className='modal'>
				<div className='modal-background' onClick={modalClose} />
				<div className='modal-content'>
					{children}
				</div>
			</div>,
			document.body
		)
	}

	const openModal = () => {
		setIsOpened(true)
	}
	const closeModal = () => {
		setIsOpened(false)
	}
 
	try {
		let spanEles = document.querySelectorAll('.post-link')
		console.log(spanEles)
	    for(let i = 0; i< spanEles.length; i++) {
		spanEles[i].addEventListener('selectstart', () => {
			setLInk(spanEles[i].dataset.placeholder)
			// console.log(spanEles[i].dataset.placeholder)
			setSelected(spanEles[i].id)
		})
	  }
	} catch (error) {
		showToast('Error', error.message, 'error')
	}

	const buttons = document.querySelectorAll('.button')
	buttons.forEach((button) => {
		// console.log(button)
		button.disabled = isVerified
		// button.display = isVerified? 'none': 'block'
	})

    useEffect(() => {
		if(selectedFile && ds) {
			// console.log(selectedFile)
		    const divEle = document.getElementById('input-fields')
			// const alts = prompt('Enter image alt description')
		    const contentEle = document.createElement('div')
		    const img = document.createElement('img')
		    const timeStamp = Date.now()
		    const alt = document.createElement('p')
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
			// console.log(selectedFile)
			// if(alt.length > 2) {
			setRes([...res, {'img': {'url':selectedFile,
		       'alt':alts
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
			setds(false)
	    }
	}, [selectedFile])
	const handleVerifyContent = async () => {
		// paragraph
		if(confirm('Note: to undo this you\'ll need to refresh the page and thus lose all progress. Click ok to verify all ')) {
			res.filter(( key => Object.keys(key)[0] === 'text')).map((text) => {
				// console.log('s')
				const search = document.getElementById(text.text)
				const searchv = document.getElementById(`${text.text}v`)
				// console.log(searchv.value, text.text)
				text.text = searchv.value
				// console.log(res)
				setIsVerified(true)
			})
			// heading
			res.filter(( key => Object.keys(key)[0] === 'heading')).map((heading) => {
				// console.log(heading)
				const search = document.getElementById(heading.heading)
				// console.log(search)
				// const searchv = document.getElementById(`${text.text}v`)
				// console.log(searchv.value, text.text)
				heading.heading = search.textContent
				// console.log(res)
				setIsVerified(true)
			})
			// images
			res.filter(( key => Object.keys(key)[0] === 'img')).map(async(img) => {
				// const handleVerifyContent = async () => {
				try {
					// console.log('so')
					const imageRef = ref(storage, `posts/${caption}/${img.img.alt}`)
					// console.log(img.img.url)
					await uploadString(imageRef,img.img.url,'data_url')
					const downloadUrl = await getDownloadURL(imageRef)
					if(downloadUrl) {
					   img.img.url = downloadUrl
					}
					// console.log(res)
					} catch (error) {
					   showToast('Error', error.message, 'error')
					} finally {
						setIsVerified(true)
					}
			})
		}
	}

	const handlePostCreation = async() => {	
		try {
			await handleCreatePost(caption, cat, res)
			// onClose()
			setCaption('')
			setSelectedFile(null)
			setRes([])
			// setCat('')

		} catch (error) {
			showToast('Error', error.message, 'error')
			console.log(error)
		}
	} 

	const deleteTxtContent = (id) => {
		// console.log(id)
		// console.log(res)
		const updateContent = res.filter(item => item.text !== id)
		// console.log(updateContent)
		setRes(updateContent)
		// console.log(res)
	}
	const deleteHeadContent = (id) => {
		// console.log(id)
		// console.log(res)
		const updateContent = res.filter(item => item.heading !== id)
		// console.log(updateContent)
		setRes(updateContent)
		// console.log(res)
	}
	const deleteImgContent = (id) => {
		const updateContent = res.filter(item => item.img !== id)
		setRes(updateContent)
	}

    const getSelection = () => {
		// setSelected(window.getSelection())
	    setSelected_txt(window.getSelection().toString().trim())

		// const el = document.createElement('span')
		// 	el.classList.add('post-link')
		// 	el.textContent = selected_txt
		// 	const range = selected.getRangeAt(0)
		// 	// console.log(window.getSelection().toString())
		// 	// const range = selected_txt.getR
		// 	range.deleteContents()
		// 	console.log(selected_txt)
		// 	range.insertNode(el)
		onOpen()
	}

	const unLinkSelection = () => {
		if(selected_txt && link.length > 3) {
			const exe = document.getElementById(selectedElement)
			const span_exe = document.getElementById(selected)
			console.log(exe)
				if(exe.textContent.includes(selected_txt)) {
					console.log(span_exe)
					console.log(selected)
					let tValue = document.getElementById(`${exe.id}v`)
					let txt = tValue.value || exe.textContent 
					    try {
							if(link !== span_exe.dataset.placeholder) {
								showToast('Error', 'Incorrect link. Click on linked text to set the link', 'error')
								return
							}
							const ess = exe.querySelectorAll('.post-link')
							for(let i = 0; i < ess.length; i++) {
								if(ess[i].textContent === selected_txt) {
									const text = document.createTextNode(selected_txt)
									ess[i].parentNode.replaceChild(text, ess[i])
								}
							}
							let stl = `[-${link}:${selected_txt}-]`
							console.log(stl)
							console.log(txt.includes(stl))
							while(txt.includes(stl)) {
								console.log(`${selected_txt}d`)
								txt = txt.replace(stl, selected_txt)
							}
							tValue.value = txt
							console.log(tValue.value)
							setSelected_txt('')
							onClose()
						} catch (error) {
							
						}
					return
				}
		}else {
			showToast('Error', 'Highlight a Text or Input a valid link', 'error')
			setSelected_txt('')
			onClose()
			return
		}		
	}


	const handleSelection = () => {
		// setIsLinked(true)
		if(selected_txt && link.length > 3) {
			// onClose()
			// console.log('dod')
			const exe = document.getElementById(selectedElement)
			// const span = $($('span').css('color', 'blue').text(selected_txt))
			console.log('diod')
			// const el = document.createElement('span')
			// el.classList.add('post-link')
			// el.textContent = selected_txt
			// const range = selected.getRangeAt(0)
			// // console.log(window.getSelection().toString())
			// // const range = selected_txt.getR
			// range.deleteContents()
			// console.log(selected_txt)
			// range.insertNode(el)
			// setSelected_txt('')
			// console.log(exe)
			// for(let i=0; i < exe.length; i++) {
				console.log('did')
				// if(exe.textContent.includes(selected_txt)) {
					// if(selected_txt[0] === ' ' || selected_txt[selected_txt.length -1] === ' ' ) {
						setSelected_txt(selected_txt.trim())
					// }
					console.log(exe)
					let tValue = document.getElementById(`${exe.id}v`)
					let txt = tValue.value || exe.textContent 
					let hi = exe.innerHTML
					console.log(exe)
					let regex = new RegExp(selected_txt, 'g')
					let id = Date.now()
					let newtxt = hi.replace(regex, `<span contenteditable=${isLinked} class="post-link" data-placeholder="${link}" id="${id}" style="color: blue;">${selected_txt}</span>`)
					// console.log(newtxt)
					// hi = hi.replace(selected_txt, $('span').css('display', 'inline').addClass('post-link').text('sojsoj').hide(false)[0].outerHTML)
					exe.innerHTML = exe.textContent
					exe.innerHTML = newtxt
					console.log(newtxt)
					
					tValue.value = txt.replace(regex, `[-${link}:${selected_txt}-]`)
					console.log(tValue.value)
					// exe.focus()
					setSelected_txt('')
					onClose()
					return
				// }
			// }
		}else {
			setSelected_txt('')
			onClose()
			return
		}		
	}

	const handleHeading = () => {
		const divEle = document.getElementById('input-fields')
		const contentEle = document.createElement('div')
		const heading = document.createElement('h2')
		heading.contentEditable = true
		const timeStamp = Date.now()
		const deleteButton = document.createElement('button')
		contentEle.appendChild(deleteButton)
		deleteButton.textContent = 'X'
		// deleteButton.disabled = true
		deleteButton.classList.add('button')
		heading.setAttribute('type','text')
		// heading.setAttribute('wrap', 'hard')
		contentEle.setAttribute('id', `${timeStamp}c`)
		heading.setAttribute('id', timeStamp)
		heading.setAttribute('class', 'heading')
		heading.setAttribute('data-placeholder','Heading....')
		contentEle.classList.add('content')
		heading.classList.add('input-fields')
		divEle.appendChild(contentEle)
		// heading.textContent = 'iuih'
		contentEle.appendChild(heading)
		// heading.addEventListener('input', (e) => {
		// 	// console.log(heading.textContent)
		// 	// e.style.border = 'none'
		// 	tValue.value = e.target.textContent
		// 	console.log(tValue.value)
		// })
		// heading.addEventListener('input', autoSize)
		// function autoSize() {
		// 	const el = this
		// 	setTimeout(function() {
		// 		// el.style.cssText = 'height: auto'
		// 		el.style.cssText = 'height:' + el.scrollHeight+ 'px'
		// 	})
		// }
		setRes([...res, {'heading': heading.id}])
		
		deleteButton.onclick = () => {
				deleteHeadContent(timeStamp)
			const contentEle = document.getElementById(`${timeStamp}c`)
			const ele = document.getElementById(timeStamp)
			// const button = document.getElementById(`${timeStamp}b`)
			contentEle.removeChild(ele)
			divEle.removeChild(contentEle)
		}
	}

    const handleText = () => {
		const divEle = document.getElementById('input-fields')
		const contentEle = document.createElement('div')
		const iField = document.createElement('div');
		iField.contentEditable = true
		const tValue = document.createElement('p')
		const timeStamp = Date.now()
		const deleteButton = document.createElement('button')
		contentEle.appendChild(deleteButton)
		deleteButton.textContent = 'X'
		deleteButton.classList.add('button')
		deleteButton.disabled = isVerified
		iField.setAttribute('type','text')
		// iField.setAttribute('wrap', 'hard')
		contentEle.setAttribute('id', `${timeStamp}c`)
		iField.setAttribute('id', timeStamp)
		iField.setAttribute('class', 'paragraph')
		iField.setAttribute('as', Sol)
		tValue.setAttribute('id', `${timeStamp}v`)
		tValue.setAttribute('display', 'none')
		deleteButton.setAttribute('id', `${timeStamp}b`)
		iField.setAttribute('data-placeholder','Type here....')
		contentEle.classList.add('content')
		iField.classList.add('input-fields')
		divEle.appendChild(contentEle)
		// iField.textContent = 'iuih'
		contentEle.appendChild(iField)
		contentEle.appendChild(tValue)
		iField.addEventListener('input', (e) => {
			// console.log(iField.textContent)
			// e.style.border = 'none'
			tValue.value = e.target.textContent
			// console.log(tValue.value)
		})
		iField.addEventListener('selectstart', () => {
			setSelectedElement(iField.id)
		})
		// iField.addEventListener('input', autoSize)
		// function autoSize() {
		// 	const el = this
		// 	setTimeout(function() {
		// 		// el.style.cssText = 'height: auto'
		// 		el.style.cssText = 'height:' + el.scrollHeight+ 'px'
		// 	})
		// }
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

	
	  const handleImg = async () => {
		 imgRef.current.click()
		 set_alts(prompt('Enter image alt description'))
		setds(true)
		// const alts = prompt('Enter image alt description')
		// setTimeout(() => {
		// //   if(countTxt){
		// 	const alts = prompt('Enter image alt description')
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
		// 		setRes([...res, {'img': {'url':img_src,
		// 	       'alt':alts
		//         }}])
		// 		console.log(ho) 
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
		// // }
		// }, 8000);
	}
  return (<>
    <Box w={'full'} >
     <Container maxW='5xl'  bg={'#1a1a1a'} borderRadius={'15px'} color={'white'} my={10} py={5}>
	   <Flex color={'white'}>
          <Button color={'white'} bg={'black'} mx={2} onClick={handleImg}> Add Image </Button>
          <Button color={'white'} bg={'black'} mx={2} onClick={handleHeading}> Add Heading </Button>
          <Button color={'white'} bg={'black'} mx={2} onClick={handleText}> Add Paragraph </Button>
          <Button color={'white'} bg={'black'} mx={2} onClick={getSelection}> Link </Button>
          <Button color={'white'} bg={isLinked? 'blue': 'black'} mx={2} onClick={() => setIsLinked(!isLinked)}> X </Button>
       </Flex>
	   <Box pb={6} cursor={'text'}>
		   <Input type='text' w={'100%'} my={3} placeholder='Enter heading' value={caption} onChange={(e) => setCaption(e.target.value)}
		    _placeholder={{color: 'white', fontWeight: "600", fontSize:'20'}}
		   />
	       {/* <Input type='text' w={'50%'} placeholder='Enter category' value={cat} onChange={(e) => setCat(e.target.value)} _placeholder={{color: 'black', fontWeight: "600", fontSize:'20'}}/> */}
		   <Modal isOpen={isOpen} onClose={onClose} >
			 <ModalOverlay />
			 <ModalContent maxW={'400px'} >
				{/* <ModalCloseButton zIndex={6}/> */}
				<ModalBody bg={'#1a1a1a'} px={1} color={'white'} display={'flex'} flexDir={'column'} gap={2}>
					<Input type='text' placeholder='Enter link' value={link} onChange={(e) => setLInk(e.target.value)} />
					<Input type='text' placeholder='selected text' value={selected_txt} onChange={(e) => setSelected_txt(e.target.value)} />
					<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
					    <Button color={'white'} bg={'black'} mx={2} onClick={handleSelection}>Link</Button>
					    <Button color={'white'} bg={'black'} mx={2} onClick={unLinkSelection}>Unlink</Button>
					</Box>
				</ModalBody>
			 </ModalContent>
		   </Modal>
		   <Box w={'full'}  position={'relative'} id='input-fields'>
		      <Input type='file' hidden ref={imgRef} onChange={handleImageChange}/>
			  {/* <Image src={selectedFile}/> */}
            </Box>
	    </Box>
	    <Button color={'white'} mr={3} bg={'black'} onClick={handleVerifyContent} isLoading={isLoading} display={!isVerified? 'unset' : 'none'} >Verify All</Button>
	    <Button color={'white'} mr={3} bg={'black'} onClick={handlePostCreation} isLoading={isLoading} display={isVerified? 'unset' : 'none'} >Post</Button>
	</Container> 
    </Box>
 </> )
}

export default CreatePost

function useCreatePost() {
	const showToast = useShowToast()
	const [isLoading, setIsLoading] = useState(false)
	// const authUser = useAuthStore((state) => state.user) 
	const createPost = usePostStore(state => state.createPost)
	const {pathname} = useLocation()

	const handleCreatePost = async( caption, cat, res ) => {
		if(isLoading) return;
		// if(!cat) throw new Error('Set post category')
		if(!caption) throw new Error('Set post heading')
		if(res.length == 0) throw new Error('please write content')
		setIsLoading(true)
	    const newPost = {
			// caption: caption,
			headerText: caption,
			content: res,
			likes:[],
			category: cat,
			comments:[],
			createdAt: Date.now(),
			relevant: true
			// createdBy: authUser.uid,
		}
		try {
			const countRef = doc(firestore, 'counter', 'count')
            const docSnap = await getDoc(countRef)
            let count = docSnap.data().count_number +1
			await updateDoc(countRef, {count_number: count})

			const postDocRef = await addDoc(collection(firestore,'posts'), newPost)

			const imageRef = res.filter(item => item.hasOwnProperty('img'))[0].img
			await updateDoc(postDocRef, {image: imageRef}, {counter: count})
			newPost.image = imageRef
			// showToast('Succes','Post created successfully', 'succes')
			createPost({...newPost,id: postDocRef.id})
		} catch (error) {
			showToast('Error', error.message, 'error')
			console.log(error)
		}finally {
			setIsLoading(false)
		}
	}
	return {isLoading, handleCreatePost}
}