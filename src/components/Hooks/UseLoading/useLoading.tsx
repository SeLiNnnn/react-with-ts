import axios from 'axios';
import {useEffect, useState} from 'react';

export const useLoading = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }, deps);


  return [data, loading];

};

export default useLoading;
