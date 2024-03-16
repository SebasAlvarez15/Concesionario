import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput, Modal, Portal } from 'react-native-paper'

//import globalStyles from '../styles/globalStyles';


const SearchVehicle = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <PaperProvider>
        
      <Text style={styles.title}>Busqueda de vehiculos</Text>
      <Text >Ingrese el modelo del vehiculo</Text>
      <TextInput
        label="Buscar modelo del vehiculo" />
      <Portal>
        <Modal Visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>Buscar</Button>
        
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
export default SearchVehicle