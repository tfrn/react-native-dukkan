import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import {REACT_APP_API_URL} from '@env';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch'; // custom hook
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useDispatch } from 'react-redux';

function Products({navigation}) {  
  const dispatch = useDispatch();
  const {error, loading, data} = useFetch(REACT_APP_API_URL);
  
  const handleProductSelect=(id)=>{
    navigation.navigate("DetailPage", {id});
  };
  
  const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>;
  
  if(loading){
    return <Loading />
  };
  
  if(error){
    return <Error />
  };
  useDispatch
  return (
    <SafeAreaView>
        <FlatList data={data} renderItem={renderProduct}></FlatList>
    </SafeAreaView>
  )
}

export default Products;
