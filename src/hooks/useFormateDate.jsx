import { Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const useFormateDate = () => {
//   const [date, setDate] = useState()
  const formateDate = (timestamp) => {
    // console.log(timestamp)
    const date = new Date(timestamp);
    // Options for formatting the date
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    // Convert the date into the desired format (06 Jun 2024)
    const formattedDate = date.toLocaleDateString('en-GB', options);
    // setDate(formattedDate)
    // console.log(formattedDate)
    return (
        <> {formattedDate} </>
    )
  }
  return {formateDate}
}

export default useFormateDate