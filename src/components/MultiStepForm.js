import React, { useState } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Success from './Success';

import dishes from '../data/dishes.json';

const MultiStepForm = () => {
  const data = dishes.dishes;
  const [form, setForm] = useState({
    step: 0,
    info: [
      {
        meal: '---',
        numberOfPeople: 1,
      },
      {
        restaurant: '---',
      },
    ],
    dishes: [],
  });

  const props = { setForm, data, form };

  switch (form.step) {
    case 0:
      return <Step1 {...props} />;
    case 1:
      return <Step2 {...props} />;
    case 2:
      return <Step3 {...props} />;
    case 3:
      return <Step4 {...props} />;
    case 4:
      return <Success {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
