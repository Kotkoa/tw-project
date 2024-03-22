import React, { useState } from 'react'
import InputBorder from '../InputBorder'
import MetricSelector from '../MetricSelector'

const Converter = (props) => {
  const [metricWeight, setMetricWeight] = useState(true)
  const [inputWeight, setInputWeight] = useState('')

  const changeMetric = () => setMetricWeight((prevState) => !prevState)

  const handleChangeWeight = (e) => {
    setInputWeight(e.target.value)
  }

  const displayWeight = () => {
    if (inputWeight === '') return ''

    const weight = parseFloat(inputWeight)
    if (isNaN(weight)) return 'Invalid input' // Basic validation

    if (metricWeight) {
      return weight // Assuming the input is always in KGs
    } else {
      return Math.floor(weight * 2.20462) // Convert KGs to LBS for display
    }
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-16">
      <form>
        <InputBorder
          name="Weight"
          className="flex flex-row justify-between mb-5"
        >
          <input
            type="text"
            value={displayWeight()}
            onChange={handleChangeWeight}
            placeholder="0"
            className="w-full bg-white outline-none"
          />
          <MetricSelector changeMetric={changeMetric} isMetric={metricWeight} />
        </InputBorder>
      </form>
    </div>
  )
}

export default Converter
