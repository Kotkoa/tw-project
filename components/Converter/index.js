import React, { useState } from 'react'
import InputBorder from '../UI/InputBorder'
import Button from '../UI/Button'
import MetricSelector from '../UI/MetricSelector'

const Converter = (props) => {
  const [metricWeight, setMetricWeight] = useState(true)

  const changeMetric = () => setMetricWeight((prevState) => !prevState)

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-16">
      <form>
        <InputBorder
          name="Weight"
          className="flex flex-row justify-between mb-5"
        >
          <input type="text" className="w-full bg-white outline-none" />
          <MetricSelector changeMetric={changeMetric} isMetric={metricWeight} />
        </InputBorder>
      </form>
    </div>
  )
}

export default Converter
