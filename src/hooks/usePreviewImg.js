import React, { useState } from 'react'
import useShowToast from './useShowToast'

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isUpdated, setIsUpdated] = useState(false)
  const showToast = useShowToast()
  const maxFileSizeInBytes = 2 * 1024 *1024
  
  const handleImageChange = (e) => {
    // console.log('ddo')
    const file = e.target.files[0]
    if(file && file.type.startsWith('image/')) {
        if(file.size > maxFileSizeInBytes) {
            showToast('Error', 'File must be less than 2MB', 'error')
            setSelectedFile(null)
            return
        }
        const reader = new FileReader()
        reader.onloadend = () => {
            setSelectedFile(reader.result)
            console.log(selectedFile)
        }
        reader.readAsDataURL(file)
    }else {
        showToast('Error', 'Please select an image file', 'error')
        setSelectedFile(null)
    }
  }
  return {selectedFile, setSelectedFile, handleImageChange}
}

export default usePreviewImg