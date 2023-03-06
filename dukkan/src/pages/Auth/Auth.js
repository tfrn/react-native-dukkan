// react, react native
import React from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native';

// Style
import Style from './Auth.style';

// formik, yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// usePost hook'u
import usePost from '../../hooks/usePost';

// env url
import {REACT_APP_API_AUTH_URL} from '@env';

// error, loading
import Loading from '../../components/Loading';

// redux
import { useDispatch, useSelector } from 'react-redux';

// yup validation
const validationSchema = Yup.object().shape({
    username: Yup.string().required('isim girilmeli'),
    password: Yup.string().required('şifre girilmeli'),
  });

// form initial values
const initialValues = { username: '', password: '' };

// main function
function Auth({navigation}) {
  const {data, post, loading, error} = usePost();
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  const onSubmit = (values) => {
      post(REACT_APP_API_AUTH_URL, values);
  };
if(loading){
  return <Loading />;
}
else if(error){
  Alert.alert("bir hata oluştu!" + error); 
}
else if (data) {
  if (data.status === "Error") {
      Alert.alert("Kullanıcı Bulunamadı!")
  } else {
      dispatch({type: 'SET_USER', payload:{user: JSON.stringify(user) }});
  }
}
  return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
          {({ handleChange, handleSubmit, values, errors  }) => (
            <View style={Style.container}>
              <TextInput
                style={Style.input}
                onChangeText={handleChange('username')}
                value={values.username}
                placeholder="username"
              />
              {errors.username && <Text>{errors.username}</Text>}
              <TextInput
                style={Style.input}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              {errors.password && <Text>{errors.password}</Text>}
              <Button title="Submit" onPress={handleSubmit} disabled={loading}/>
            </View>
          )}
        </Formik>
      );
}

export default Auth;

