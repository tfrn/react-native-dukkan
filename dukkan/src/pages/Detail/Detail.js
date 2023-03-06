import React from 'react'
import { View, Text, Image } from 'react-native';
import Styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import {REACT_APP_API_URL} from '@env';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail({route}) {
const {id}= route.params;
const {loading, error, data} = useFetch(`${REACT_APP_API_URL}/${id}`);

if(loading){
  return <Loading />
};

if(error){
  return <Error />
};

  return (
    <View style={Styles.container}>
        <Image style={Styles.image} source={{uri: data.image}}></Image>
        <View style={Styles.body_container}>
        <Text style={Styles.title}>{data.title}</Text>
        <Text style={Styles.desc}>{data.description}</Text>
        <Text style={Styles.price}>{data.price} TL</Text>
        </View>
    </View>
  )
}

export default Detail;
