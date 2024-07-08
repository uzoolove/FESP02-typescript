const API_SERVER = 'http://localhost:3300';

const useMutation = (url: string, options: RequestInit = {}) => {
  const send = async <T>(addOptions = {}): Promise<T> => {
    if(!url.startsWith('http')){
      url = API_SERVER + url;
    }

    options = {
      headers: {
        'Content-Type': 'application/json'
      },
      ...options,
      ...addOptions
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }
      const result: T = await response.json();
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  return { send };
};

export default useMutation;