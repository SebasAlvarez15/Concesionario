import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const RepairCar = () => {
  return (
    <PaperProvider>
        <View>
            <Text style = {styles.title}>Servicio de taller</Text>
            <Text style = {styles.titleCita}>Agenda tu cita</Text>
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
    },
    titleCita:{
        backgroundColor: '#7F62F0',
        textAlign:'center',
        fontSize: 30,
        marginVertical:10
    }
})
export default RepairCar