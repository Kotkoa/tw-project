import React, { ChangeEvent, useState } from 'react';

import { displayWeight } from '@/utils/display-weight';
import { InputBorder } from '../InputBorder';
import { MetricSelector } from '../MetricSelector';

export const Converter = () => {
  const [metricWeight, setMetricWeight] = useState(true);
  const [value, setValue] = useState<number | null>(null);

  const changeMetric = () => setMetricWeight((prevState) => !prevState);

  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <form className="flex flex-1 flex-col items-center justify-center py-16">
      <InputBorder name="Weight" className="mb-5 flex flex-row justify-between">
        <input
          type="number"
          inputMode="none"
          value={displayWeight({ value, metricWeight })}
          onChange={handleChangeWeight}
          placeholder="0"
          className="w-full bg-white outline-none"
        />
        <MetricSelector changeMetric={changeMetric} isMetric={metricWeight} />
      </InputBorder>
    </form>
  );
};
