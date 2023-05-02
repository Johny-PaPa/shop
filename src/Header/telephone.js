import React from 'react'
import { MuiTelInput } from 'mui-tel-input'

const MyComponent = () => {
  const [phone, setPhone] = React.useState('')

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }

  return (
    <MuiTelInput value={phone} onChange={handleChange} />
  )
}
export default MyComponent;