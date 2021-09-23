import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Card from '../components/Card';
import Create from '../components/Create';
import Loading from '../components/Loading';
import Category from '../components/Category';

const HomePage = () => {
  const [input, setInput] = useState('');
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const key = '563492ad6f91700001000001e29189a8073847c1af5449418a3579c9';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const categoryButton = ['cake', 'dog', 'cat'];

  // fetch data from API
  const search = async (url) => {
    const fecthData = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: key,
      },
    });
    let parseData = await fecthData.json();
    setData(parseData.photos);
    setLoading(false);
    console.log(data);
  };

  // const enter = (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     console.log('ss');
  //     search(searchURL);
  //   }
  // };

  // fetch data when the page loads up
  useEffect(() => {
    search(initialURL);
    setLoading(true);
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <>
      <div className="section">
        {/* 標題及搜尋框 */}
        <Create
          search={() => {
            search(searchURL);
          }}
          input={input}
          setInput={setInput}
          // enter={() => {
          //   enter();
          // }}
        />

        {/* 分類按鈕 */}
        <p style={{ textAlign: 'center', color: '#261808' }}>
          try these categories ⬇
        </p>
        <div className="category">
          {categoryButton.map((v, i) => {
            return (
              <Category
                v={v}
                i={i}
                search={() => {
                  search(
                    `https://api.pexels.com/v1/search?query=${v}}&per_page=15&page=1`
                  );
                }}
              />
            );
          })}
        </div>

        {/* 搜尋結果 */}
        <div className="pictures">
          {/* 如果直接用 map，因為 data 是 null，會報錯，所以先設定一個條件，data 是 null 時都不會進行 map，直到按下 search 啟動，才會出現 */}
          {data &&
            data.map((photo, i) => {
              return <Card data={photo} i={i} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
