import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from "../utils/colors";

export default function Footer(props) {
    const {cal}=props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={cal}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
    },

    text:{
        fontWeight: "bold",
        fontSize: 25,
        color: "#000",
        textAlign: "center",
    },

    button:{
        backgroundColor: colors.PRIMARY_COLOR,
        padding: 16,
        borderRadius: 20,
        width: "75%",
    }
})
