import React from 'react';
import 'antd/dist/antd.css';

import { Steps } from 'antd';

const { Step } = Steps;

const Progress = ({ current }) => {
  return (
    <Steps current={current} percent={0}>
      <Step title="Step 1" />
      <Step title="Step 2" />
      <Step title="Step 3" />
      <Step title="Review" />
    </Steps>
  );
};

export default Progress;
