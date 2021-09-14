import React, { useState } from 'react';
import './styles/style.css';

// 購物清單
import OrderList from './components/shoppingList/OrderList';
import Summary from './components/shoppingList/Summary';

// 表單元素
import Input from './components/form/Input';
import Textarea from './components/form/Textarea';
import RadioBox from './components/form/RadioBox';
import Select from './components/form/Select';
import Agree from './components/form/Agree';

const App = () => {
  // 購物清單
  const [tOne, setTOne] = useState(1);
  const [tTwo, setTTwo] = useState(1);
  const [tThree, setTThree] = useState(1);
  const price = { tOne: 300, tTwo: 200, tThree: 250 };
  const name = {
    tOne: 'tshirt-one',
    tTwo: 'tshirt-two',
    tThree: 'tshirt-three',
  };

  // 表單元素
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState('');

  return (
    <>
      <div className="container pb-5 text-center">
        <h1 className="mb-5">購物清單</h1>
        <OrderList
          tOne={tOne}
          tTwo={tTwo}
          tThree={tThree}
          price={price}
          setTOne={setTOne}
          setTTwo={setTTwo}
          setTThree={setTThree}
          name={name}
        />
        <hr />
        <Summary tOne={tOne} tTwo={tTwo} tThree={tThree} price={price} />
      </div>

      <div className="container text-center pb-5">
        <h1 className="mb-5">表單元素</h1>
        <Input text={text} setText={setText} />
        <hr />
        <Textarea textarea={textarea} setTextarea={setTextarea} />
        <hr />
        <Select
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <hr />
        <RadioBox gender={gender} setGender={setGender} />
        <hr />
        <Agree agree={agree} setAgree={setAgree} />
      </div>
    </>
  );
};

export default App;
