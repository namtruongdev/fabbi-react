import React from 'react';

import { Button } from 'antd';

import Progress from './Progress';

const Step4 = ({ form, setForm }) => {
  const previous = () => {
    setForm({
      step: 2,
      info: form.info,
      dishes: form.dishes,
    });
  };

  const next = () => {
    setForm({
      step: 4,
      info: form.info,
      dishes: form.dishes,
    });
  };
  return (
    <>
      <header>
        <Progress current={3} />
      </header>
      <main className="main-step4">
        <div>
          <span>Meal</span>
          <span>{form.info[0].meal}</span>
        </div>
        <div>
          <span>No of People</span>
          <span>{form.info[0].numberOfPeople}</span>
        </div>
        <div>
          <span>Restaurant</span>
          <span>{form.info[1].restaurant}</span>
        </div>
        <div>
          <span>Dishes</span>
          <ul>
            {form.dishes.map((value, index) => (
              <li key={index}>{value[1] + ' - ' + value[2]}</li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer-step3">
        <Button type="primary" onClick={previous}>
          Previous
        </Button>
        <Button type="primary" onClick={next}>
          Submit
        </Button>
      </footer>
    </>
  );
};

export default Step4;
