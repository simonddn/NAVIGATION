import { StyleSheet, Text, View, Button } from "react-native";  
import { useNavigation } from '@react-navigation/native'; 

export default function B(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>B Page 1</Text>
            <Button title="To C" onPress={() => navigation.navigate('C')} />
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