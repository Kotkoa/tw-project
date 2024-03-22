import React from 'react'
import Button from '../Button'

function MetricSelector(props) {
  const { changeMetric, isMetric } = props

  const handleClickCM = () => {
    if (!isMetric) {
      return changeMetric()
    }
    return
  }

  const handleClickIN = () => {
    if (isMetric) {
      return changeMetric()
    }
    return
  }

  return (
    <div className="inline-flex space-x-2">
      <Button onClick={handleClickCM} isMetric={isMetric}>
        CM
      </Button>
      <Button onClick={handleClickIN} isMetric={!isMetric}>
        LBS
      </Button>
    </div>
  )
}

export default MetricSelector
