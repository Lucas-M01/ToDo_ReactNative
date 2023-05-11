import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { ToDo } from "../../components/ToDo";
import { useState } from "react";


export function Home() {
    const [list, setList] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    
    function handleToDoAdd() {
        if(newTask === '') {
            return Alert.alert('Erro', 'Digite uma tarefa')
        }

        setList(prevState => [...prevState, newTask])
        setNewTask('')
    }
    function handleDeleteToDo(name: string){
        Alert.alert('Remover ToDo', `Deseja remover a tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setList(prevState => prevState.filter(item => item !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                To Do - List
            </Text>

            <Text style={styles.event}>
                Tarefas do dia
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Tarefa"
                    placeholderTextColor="#6b6b6b"  
                    onChangeText={text => setNewTask(text)}
                    value={newTask}
                />

                <TouchableOpacity style={styles.button} onPress={handleToDoAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <ToDo 
                        key={index}
                        name={item}
                        onRemove={() => handleDeleteToDo(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhuma tarefa cadastrada. Cadastre uma tarefa!
                    </Text>
                )}
            />
        </View> 
    )
}