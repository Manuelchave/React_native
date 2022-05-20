import React from 'react'
import { Text, Image, View} from 'react-native';

export const CatComponents = (props) => {
  return (
      <View>
    <text>Hola soy un gato y mi nombre es {props.nombre} y mi raza es {props.raza}</text>
    <Image
        source={{uri: props.foto}}
        style={{width: 200, height: 200}}
      />
      </View>

  )
}

export default CatComponents;
