import { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import adicionaTarefa from "../App";
import add from '../assets/add.png'

export default function CaixaDeTexto(){
     const [nome, setNome] = useState("Digite a tarefa: ")

     return(
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                value={nome}
                onChangeText={text => setNome(text)}
                autocapitalize="none"
                multiline='true'
            />
            <TouchableOpacity onPress={() => adicionaTarefa(nome)}>
                <View style={styles.adicionarImg}>
                    <ImageBackground
                        source={add}
                        resizeMode="stretch"
                        style={styles.image}
                    ></ImageBackground>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        borderWidth:1, 
        borderColor: '#000',
        borderRadius: '10px',
        width: "90%",
        height: '40px',
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    adicionarImg: {
        height: '30px',
        width: '30px',
        margin: '10px'
    }
})