import { StyleSheet, Text, View, Button } from "react-native";  
import { useNavigation } from '@react-navigation/native'; 

export default function C(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>C Page 1</Text>
            <Button title="To A" onPress={() => navigation.navigate('A')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})