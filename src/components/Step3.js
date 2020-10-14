import React from 'react';

import { Button, message } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import Progress from './Progress';
import ItemDrop from './ItemDrop';

const Step3 = ({ form, data, setForm }) => {
  const dishes = data.filter(
    (dish) =>
      dish.availableMeals.indexOf(form.info[0].meal) > -1 &&
      dish.restaurant === form.info[1].restaurant
  );

  const dish = dishes.map((value) => value.name);

  const onAddDish = () => {
    const key = form.dishes[form.dishes.length - 1][0];
    if (form.dishes[key][1] === '---') {
      message.error('You have not chosen a Dish!');
    } else {
      setForm({
        step: form.step,
        info: form.info,
        dishes: [...form.dishes, [key + 1, '---', 1]],
      });
    }
  };

  const onChangeDish = (value, data) => {
    const len = form.dishes.length;

    const pos = data.pos;

    if (len !== 0) {
      if (form.dishes[pos][1] === value) {
        message.error('Cannot choose a dish twice!');
      } else {
        setForm({
          step: form.step,
          info: form.info,
          dishes: [
            ...form.dishes.slice(0, pos),
            [pos, value, 1],
            ...form.dishes.slice(pos + 1),
          ],
        });
      }
    } else {
      setForm({
        step: form.step,
        info: form.info,
        dishes: [...form.dishes, [0, value, 1]],
      });
    }
  };

  const onChangeNoOfServings = (e) => {
    const value = e.target.value;
    const key = parseInt(e.target.dataset.id);
    setForm({
      step: form.step,
      info: form.info,
      dishes: [
        ...form.dishes.slice(0, key),
        [key, form.dishes[key][1], value],
        ...form.dishes.slice(key + 1),
      ],
    });
  };

  const previous = () => {
    setForm({
      step: 1,
      info: form.info,
      dishes: form.dishes,
    });
  };

  const next = () => {
    if (form.dishes.length === 0) {
      message.error('You have not chosen a Dish!');
    } else {
      setForm({
        step: 3,
        info: form.info,
        dishes: form.dishes,
      });
    }
  };

  return (
    <>
      <header>
        <Progress current={2} />
      </header>
      <main>
        {form.dishes.length === 0 ? (
          <div className="input-step3">
            <ItemDrop
              label="Please Select a Dish"
              data={dish}
              defaultValue="---"
              onChange={onChangeDish}
            />
            <div className="input-number">
              <label>Please enter no of servings</label>
              <input
                type="number"
                className="noOfServings"
                min={1}
                max={10}
                defaultValue={1}
              />
            </div>
          </div>
        ) : (
          <>
            {form.dishes.map((value, index) => (
              <div key={index} className="input-step3">
                <ItemDrop
                  label="Please Select a Dish"
                  data={dish}
                  defaultValue={value[1]}
                  onChange={onChangeDish}
                  pos={index}
                />
                <div className="input-number">
                  <label>Please enter no of servings</label>
                  <input
                    type="number"
                    data-id={index}
                    className="noOfServings"
                    min={1}
                    max={10}
                    defaultValue={form.dishes[index][2]}
                    onChange={onChangeNoOfServings}
                  />
                </div>
              </div>
            ))}
            <PlusCircleFilled
              style={{
                fontSize: '2rem',
                color: '#08c',
                margin: '0 0 30px 0',
                cursor: 'pointer',
              }}
              onClick={onAddDish}
            />
          </>
        )}
      </main>
      <footer className="footer-step3">
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

export default Step3;
