import {Modal, View, Text, Button} from "react-native"


const ModalDelete =(modalVisible, onHandleModal, deleteItem) =>{
    return (
    <Modal visible={modalVisible} animationType='fade' style ={styles.modal}>
        <Text>
        ¿Quieres eliminar este elemento?
        <Button title='Si, borrar' color="#db5a42" onPress={deleteItem} />
        <Button title='Cancelar' onPress={onHandleModal} />
        </Text>
    </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        
    }
})
export default ModalDelete