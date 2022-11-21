import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";
import { ImageBackground } from "react-native";
import close from "../assets/close.png";

export default function Tarefa({nome, func}) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.tarefaView}>
            <CheckBox
            style={styles.tarefaCheckbox} 
            checkedIcon='check'
            uncheckedIcon='square-o'
            checkedColor="green"
            uncheckedColor="red"
            checked={checked}
            onPress={() => setChecked(!checked)}></CheckBox>
            <Text style={[styles.uncheckedText, checked? styles.checkedText : null]}>{nome}</Text>
            <TouchableOpacity onPress={func}>
                <View style={styles.apagar}>
                    <ImageBackground
                        source={close}
                        resizeMode="stretch"
                        style={styles.image}
                    ></ImageBackground>
                </View>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tarefaView: {
        flexDirection: 'row',
        borderRadius: '10px',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        margin: '15px',
    },
    uncheckedText: {
        color: 'white',
        fontWeight: "400",
        fontSize: "20px"
    },
    checkedText: {
        textDecorationLine: "line-through"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    apagar: {
        height: '20px',
        width: '20px',
        margin: '10px'
    }

});