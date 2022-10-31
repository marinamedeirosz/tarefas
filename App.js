import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, ImageBackground, TouchableOpacity,  Text, TextInput, View, SafeAreaView, Image } from 'react-native';
import Tarefa from './componentes/Tarefa';
import { useState } from 'react';
import add from './assets/add.png'

export default function App() {
	const [tarefas, setTarefas] = useState([])
	const [nome, setNome] = useState("Digite a tarefa: ")

	const adicionaTarefa = (nome) => {
    	setTarefas(tarefas => [...tarefas, nome])
	}

	const removeTarefa = (id) => {        
		const deleted = tarefas.filter((t) => t.id !== id);
		setTarefas(deleted);
		console.log(t.id)
		console.log(id)
	}
	/*const removeItem = (tarefas, nome) => {
		let newArray = [...tarefas];
		const index = newArray.findIndex((nome) => nome === "estudar");
		if (index !== -1) {
		 newArray.splice(index, 1);
		  setTarefas(newArray);
		}
		kfsm
	}*/


	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.viewTitulo}>
				<Image style={styles.img} source={require('./assets/lista.png')}></Image>
				<Text>listinha marota</Text>
			</View>
			<View style={styles.total}>
				<View style={styles.input}/*caixa de texto*/>
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
				</View>
				<View style={styles.viewTarefas}>
					{tarefas.map((t, i) => (
					<Tarefa nome={t} id={i} key={i} func={removeTarefa}></Tarefa>
					))}
				</View>
			</View>
		<StatusBar/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	alignItems: "center"
  	},
  	img: {
    	height: 50,
    	width: 50
 	},
 	viewTitulo: {
   		alignItems: 'center',
    	flexDirection: 'row',
    	justifyContent: 'center',
	},
	viewTarefas: {
		alignItems: 'center',
		backgroundColor: "#000" ,
		width: '100%',
		borderRadius: '10px'
	},
  	total: {
    	width: "70%",
    	justifyContent: 'center',
    	alignItems: 'center'
	},
  	input: {
    	width: '100%'
	},
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
});
