import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import ModalDelete from './src/components/ModalDelete';
export default function App() {
  const  [modalVisible, setModalVisible] = useState(false)  
  const [selectedItem, setSelectedItem] = useState([])
  const [textItem, setTextItem] = useState ("") 
  const [items, setItems] = useState ([])
  
  const onHandleModal = (item) => {
    setSelectedItem(item)
    setModalVisible(!modalVisible)
   }
   
   const deleteItem = () =>{
    setItems(items => items.filter(item =>item.id!==selectedItem.id))
    setModalVisible(!modalVisible)
   }

  const onHandleTextChange = (text) => {
    setTextItem(text)
  }

    const onHandleAdd = () =>{
      setItems(prevState=>[...prevState,{id:Date.now().toString() ,value: textItem}])
      setTextItem("") 
    }

    const renderItem = ({item}) => {
      return(
        <View style={styles.itemContainer} >
        <Text> {item.value} </Text>
        <TouchableOpacity onPress={() => onHandleModal (item)}>
          <Text>X</Text>
        </TouchableOpacity>
        </View>

      )
    }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={textItem} placeholder='Agrega tu elemento' onChangeText={onHandleTextChange} style={styles.textInput}/>
        <Button title='Agregar' onPress={onHandleAdd}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList  
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <ModalDelete 
      visible = {modalVisible}
      onModal = {onHandleModal}
      onDelete = {deleteItem}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
  },
  inputContainer:{
    flexDirection: "row" 
  },
  textInput:{
    paddingHorizontal: 20,
  },
  itemContainer:{
    flexDirection: "row"
  }
});
