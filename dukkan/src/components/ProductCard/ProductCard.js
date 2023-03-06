import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Style from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
    <View style={Style.container}>
        <Image style={Style.image} source={{uri: product.image}}></Image>
        <View style={Style.body_container}>
          <Text style={Style.title}>{product.title}</Text>
          <Text style={Style.price}>{product.price} TL</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ProductCard;
