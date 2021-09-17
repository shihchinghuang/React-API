import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Card from '../components/Card';
import Create from '../components/Create';
import Loading from '../components/Loading';

const HomePage = () => {
  const [input, setInput] = useState('');
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const key = '563492ad6f91700001000001e29189a8073847c1af5449418a3579c9';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';

  // fetch data from API
  const search = async () => {
    const fecthData = await fetch(initialURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: key,
      },
    });
    let parseData = await fecthData.json();
    setData(parseData.photos);
    console.log(parseData.photos);
    setLoading(false);
  };

  // fetch data when the page loads up
  useEffect(() => {
    console.log(loading);
    search();
    setLoading(true);
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  return (
    <>
      <div className="section">
        <Create search={search} />
        <div className="pictures">
          {/* 如果直接用 map，因為 data 是 null，會報錯，所以先設定一個條件，data 是 null 時都不會進行 map，直到按下 search 啟動，才會出現 */}
          {data &&
            data.map((photo, i) => {
              return <Card data={photo} i={photo.i} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
