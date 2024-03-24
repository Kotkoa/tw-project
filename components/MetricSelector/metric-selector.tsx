import { Button } from '../Button';

type MetricSelectorProps = {
  changeMetric: () => void;
  isMetric: boolean;
};

enum Metric {
  MetricLabel = 'CM',
  ImperialLabel = 'LBS',
}

const buttonArray = [Metric.MetricLabel, Metric.ImperialLabel];

export const MetricSelector = ({ changeMetric, isMetric }: MetricSelectorProps) => {
  return (
    <div className="inline-flex space-x-2">
      {buttonArray.map((label, index) => (
        <Button key={label} onClick={changeMetric} isMetric={index === 0 ? isMetric : !isMetric}>
          {label}
        </Button>
      ))}
    </div>
  );
};
