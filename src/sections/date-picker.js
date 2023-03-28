import React from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'

const CustomInput = ({value, defaultValue, inputRef, ...props}) => {
  return <input {...props} defaultValue={defaultValue} ref={inputRef} />
}

export default function App() {
  return (
    <Flatpickr
      render={({defaultValue, value, ...props}, ref) => {
        return <CustomInput defaultValue={defaultValue} inputRef={ref} />
      }}
    />
  )
}

export const BaseFun = () => <Flatpickr options={{minDate: '2017-01-01'}} />
