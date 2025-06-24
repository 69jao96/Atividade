import React from "react";
import { StyleSheet, Linking, TouchableOpacity, Text } from "react-native";

const Click = () => {
    const handlePress = () => {
        Linking.openURL('https://www.youtube.com/watch?v=vgRB0JIr37g'); 
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
    );
};

export default Click;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#6200ee',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
