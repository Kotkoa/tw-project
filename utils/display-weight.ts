type DisplayWeight = {
  value: number | null;
  metricWeight: boolean;
};

export const displayWeight = ({ value, metricWeight }: DisplayWeight): number => {
  if (value === null) return 0;

  if (metricWeight) {
    return value;
  } else {
    return Math.floor(value * 2.20462);
  }
};
