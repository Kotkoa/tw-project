import React, { useState } from 'react'
import InputBorder from '../UI/InputBorder'
import Button from '../UI/Button'

const Converter = (props) => {
  const [metricWeight, setMetricWeight] = useState(true)
  const [metricHeight, setMetricHeight] = useState(true)

  const HandleClickWeight = () =>
    setMetricWeight((prevState) => {
      return !prevState
    })

  const HandleClickHeight = () =>
    setMetricHeight((prevState) => {
      return !prevState
    })

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-16">
      <form>
        <InputBorder
          name="Weight"
          className="flex flex-row justify-between mb-5"
        >
          <input type="text" className="w-5 bg-white" />
          <div className="inline-flex space-x-2">
            <Button onClick={HandleClickWeight} view={metricWeight}>
              CM
            </Button>
            <Button onClick={HandleClickWeight} view={!metricWeight}>
              IN
            </Button>
          </div>
        </InputBorder>
        <InputBorder
          name="Height"
          className="flex flex-row items-center justify-between"
        >
          <div>
            <input type="text" className="w-5 bg-white" />
            {!metricHeight && <input type="text" className="w-5 bg-white" />}
          </div>
          <div className="inline-flex space-x-2">
            <Button onClick={HandleClickHeight} view={metricHeight}>
              CM
            </Button>
            <Button onClick={HandleClickHeight} view={!metricHeight}>
              IN
            </Button>
          </div>
        </InputBorder>
      </form>
    </div>
  )
}

export default Converter
