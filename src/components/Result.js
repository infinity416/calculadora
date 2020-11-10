import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Result(props) {
    const{numero1, numero2, operacion, resultado, error}=props;
    console.log(props);
    return (
        <View style={styles.content}>
            {resultado && (
                <View style={styles.boxContent}>
                    <Text style={styles.title}>Resumen</Text>
                        <DataResult value={`La ${operacion} de ${numero1} y ${numero2} es igual a ${resultado.data}`}/>
                    </View>
            )
            }
            <View>
    <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    )
}

function DataResult (props){
    const {title, value}=props
    return(
        <View >
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error:{
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
    },
    
    text:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff",
        textAlign: "right"
    },

    content:{
        marginTop: 50,
        marginHorizontal: 40,
    },

    boxContent:{
        padding: 30,
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 1,
        color: "#fff",
    },

    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    }
    
   
});
