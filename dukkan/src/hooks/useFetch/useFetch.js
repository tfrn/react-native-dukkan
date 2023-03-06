// custom hook yapısı ile tüm kullanımlarımız için uygun bir bağlantı kurabiliriz. 
// burada kullanıcıdan gelen url değerine göre, data, loading ve error değerleri oluşturup geri kullancıya gönderiyoruz. 
// böylece her url bağlantısı için bu işlemleri tekrarlamaktan kurtuluyoruz.   
// custom hook yapıları sadece bağlantı için değil, her türlü tekrar gerektiren işlemler için kullanılabilir. 

import { useEffect, useState } from "react";
import axios from 'axios';

function useFetch(url){
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);

    const fetchData = async () => {
        try {
          const {data: responseData} = await axios.get(url); // response olarak dönen değeri {} ile parçalayıp içinden sadece data değerlerini aldık, ona da useState'imizin adıyla çakıştığı için alias olara productData adını verdik.
          setData(responseData);
          setLoading(false);
        } catch(error){
          setError(error.message);
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchData();
    },[]);

    return {error, loading, data}

}

export default useFetch;