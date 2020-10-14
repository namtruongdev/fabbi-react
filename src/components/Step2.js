import React from 'react';

import { Button, message } from 'antd';

import Progress from './Progress';
import ItemDrop from './ItemDrop';

const Step2 = ({ setForm, data, form }) => {
  const info = data.filter(
    (dish) => dish.availableMeals.indexOf(form.info[0].meal) > -1
  );

  const restaurant = info.map((info) => info.restaurant);

  const onChangeRestaurant = (value) => {
    setForm({
      step: form.step,
      info: [
        ...form.info.slice(0, 1),
        {
          restaurant: value,
        },
      ],
      dishes: [],
    });
  };

  const previous = () => {
    setForm({
      step: 0,
      info: form.info,
      dishes: form.dishes,
    });
  };

  const next = () => {
    if (form.info[1].restaurant === '---') {
      message.error('You have not chosen a Restaurant!');
    } else {
      setForm({
        step: 2,
        info: form.info,
        dishes: form.dishes,
      });
    }
  };

  return (
    <>
      <header>
        <Progress current={1} />
      </header>
      <main>
        <ItemDrop
          label="Please Select a Restaurant"
          data={restaurant}
          defaultValue={form.info[1].restaurant}
          onChange={onChangeRestaurant}
        />
      </main>
      <footer className="footer-step2">
        <Button type="primary" onClick={previous}>
          Previous
        </Button>
        <Button type="primary" onClick={next}>
          Next
        </Button>
      </footer>
    </>
  );
};

export default Step2;
