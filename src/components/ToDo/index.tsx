import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

interface ToDoProps {
    name: string
    onRemove: () => void
}

export function ToDo({name, onRemove}: ToDoProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}