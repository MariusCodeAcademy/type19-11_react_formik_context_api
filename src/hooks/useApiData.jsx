import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useApiData(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        // const prodArr = resp.data
        setData(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, [url]);

  return [data, setData];
  // return {data, setData}
}
