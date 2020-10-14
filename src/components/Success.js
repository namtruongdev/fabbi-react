import React from 'react';

import { Result, Button } from 'antd';

const Success = ({ setForm }) => {
  const buyAgain = () => {
    setForm({
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
  };
  return (
    <>
      <main>
        <Result
          status="success"
          title="Successfully Purchased Dishes!"
          extra={[
            <Button key="buy" onClick={buyAgain}>
              Buy Again
            </Button>,
          ]}
        />
      </main>
    </>
  );
};

export default Success;
