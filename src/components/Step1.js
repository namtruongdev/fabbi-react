import React from 'react';

import { Button, message } from 'antd';

import Progress from './Progress';
import Number from './Number';
import ItemDrop from './ItemDrop';

const Step1 = ({ setForm, form }) => {
  const next = () => {
    if (form.info[0].meal === '---') {
      message.error('You have not chosen a meal!');
    } else {
      setForm({
        step: 1,
        info: form.info,
        dishes: form.dishes,
      });
    }
  };

  const onChangeMeal = (value) => {
    setForm({
      step: form.step,
      info: [
        {
          meal: value,
          numberOfPeople: form.info[0].numberOfPeople,
        },
        ...form.info.slice(1, 2),
      ],
      dishes: [],
    });
  };

  const changeNumberOfPeople = (value) => {
    setForm({
      step: form.step,
      info: [
        {
          meal: form.info[0].meal,
          numberOfPeople: value,
        },
        ...form.info.slice(1, 2),
      ],
      dishes: form.dishes,
    });
  };

  return (
    <>
      <header>
        <Progress current={0} />
      </header>
      <main>
        <ItemDrop
          label="Please Select a meal"
          data={['breakfast', 'lunch', 'dinner']}
          defaultValue={form.info[0].meal}
          onChange={onChangeMeal}
        />
        <Number
          label="Please Enter Number of people"
          defaultValue={form.info[0].numberOfPeople}
          onChange={changeNumberOfPeople}
          value={form.info[0].numberOfPeople}
        />
      </main>
      <footer className="footer-step1">
        <Button type="primary" onClick={next}>
          Next
        </Button>
      </footer>
    </>
  );
};

export default Step1;
