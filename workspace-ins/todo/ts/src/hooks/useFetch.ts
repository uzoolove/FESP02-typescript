import { useState, useEffect } from 'react';

const API_SERVER = 'http://localhost:3300';

const useFetch = <T>(url: string, options: RequestInit = {}) => {
  const [data, setData] = useState<T | null>(null); // API 응답 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState<Error | null>(null); // 에러 상태

  const fetchData = async () => {
    setData(null);
    setLoading(true);
    setError(null);
    try {
      if(!url.startsWith('http')){
        url = API_SERVER + url;
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${ response.status }`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) { // unknown 타입
      if(err instanceof TypeError){
        console.error('네트워크 에러', err.message);
        setError(err);
      }else if(err instanceof Error){
        console.error(err.message);
        setError(err);
      }
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;