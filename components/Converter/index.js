import React from 'react'
import InputBorder from '../UI/InputBorder'
import Button from '../UI/Button'

const Converter = (props) => {
  const setButtonActive = () => {}

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-16">
      <InputBorder name="Weight" className="flex flex-row justify-between">
        <input type="text" className="outline-none" />
        <div className="inline-flex space-x-2">
          <Button type="button">CM</Button>
          <Button type="button">IN</Button>
        </div>
      </InputBorder>
    </div>
  )
}

export default Converter
