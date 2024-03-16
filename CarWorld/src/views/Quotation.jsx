import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const Quotation = () => {
  return (
  <PaperProvider>
    <View>
        <Text style = {styles.title}>Solicitud de cotizacion</Text>
    </View>
  </PaperProvider>
  )
}
const styles = StyleSheet.create({
    title:{
        backgroundColor: '#7F62F0',
        textAlign:'center',
        fontSize: 30,
        color: 'black',
        marginVertical:30
    }
})
export default Quotation