import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Vehicle = ({urlImagen, description, price}) => {
    
  return (
    <View style = {styles.container}>
        <Image source={{uri: urlImagen}} style={styles.image} />
        <Text style = {styles.title}>{description}</Text>
        <Text style = {styles.title}>$ {price}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width:150,
        height: 150
    },
    title:{
        backgroundColor:'#7F62F0',
        
    },
    container:{
      flex:1
    }
})

export default Vehicle