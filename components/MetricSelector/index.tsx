import Button from '../Button'

type MetricSelectorProps = {
  changeMetric: () => void
  isMetric: boolean
}

function MetricSelector({ changeMetric, isMetric }: MetricSelectorProps) {

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
