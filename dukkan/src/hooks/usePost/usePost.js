// custom hook yapısı ile tüm kullanımlarımız için uygun bir bağlantı kurabiliriz. 
// burada kullanıcıdan gelen url değerine göre, data, loading ve error değerleri oluşturup geri kullancıya gönderiyoruz. 
// böylece her url bağlantısı için bu işlemleri tekrarlamaktan kurtuluyoruz.   
// custom hook yapıları sadece bağlantı için değil, her türlü tekrar gerektiren işlemler için kullanılabilir. 

import { useState } from "react";
import axios from 'axios';

function usePost(){
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(null);

    const post = async (url, apiData) => {
        try {
          setLoading(true);
          const {data: responseData} = await axios.post(url, apiData); 
          setData(responseData);
          setLoading(false);
        } catch(error){
          setError(error);
          setLoading(false);
        }
      };

    return {error, loading, data, post}

}

export default usePost;