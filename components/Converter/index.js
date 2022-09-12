import React, { useState } from 'react'
import InputBorder from '../InputBorder'
import MetricSelector from '../MetricSelector'

const Converter = (props) => {
  const [metricWeight, setMetricWeight] = useState(true)
  const [inputWeight, setInputWeight] = useState('')

  const changeMetric = () => setMetricWeight((prevState) => !prevState)

  const handleChangeWeight = ({ target: { value } }) => {
    if (metricWeight) {
      return setInputWeight(value)
    }

    if (!metricWeight) {
      const weightLBStoKG = Math.floor(inputWeight * 2.2)
      return setInputWeight(weightLBStoKG)
    }
  }

  //finish at this place
  const displayWeight = () => {
    if (metricWeight) {
      return inputWeight
    }

    if (!metricWeight) {
      const weightKGtoLBS = Math.floor(inputWeight * 2.2)
      return weightKGtoLBS
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
            value={displayWeight}
            onChange={handleChangeWeight}
            placeholder="0"
            type="text"
            className="w-full bg-white outline-none"
          />
          <MetricSelector changeMetric={changeMetric} isMetric={metricWeight} />
        </InputBorder>
      </form>
    </div>
  )
}

export default Converter
