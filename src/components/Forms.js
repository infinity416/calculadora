import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';


export default function Forms(props){
    const {setNumero1, setNumero2, setOpera} = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="" keyboardType="numeric" 
                style={styles.input} onChange={e=> setNumero1(e.nativeEvent.text)}></TextInput>
                <TextInput placeholder="" keyboardType="numeric" 
                style={[styles.input, styles.inputPorcentaje]} onChange={e=> setNumero2(e.nativeEvent.text)}></TextInput>
            </View>
            <RNPickerSelect style={pickerSelectStyles}
                placeholder={{
                    label: "selecciona la operacion",
                    value: null,
                    color: "black",
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => setOpera(value)}
                items={[
                    { label: 'Suma', value:  "suma" },
                    { label: 'Resta', value: "resta" },
                    { label: 'Multiplicacion', value: "multiplicacion" },
                    { label: 'Divicion', value: "divicion" },
                ]}
             />
        </View>
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "green",
        borderRadius: 8,
        color: "white",
        paddingRight: 30,
        backgroundColor: "#fff",
    },

    inputAndroid:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "green",
        borderRadius: 8,
        color: "white",
        paddingRight: 30,
        backgroundColor: "#33373B",
    }
});

const styles = StyleSheet.create({
    viewForm:{
        position: "relative",
        bottom: -50,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center",
    },

    viewInputs:{
        flexDirection: "row",
    },

    input:{
        height: 50,
        backgroundColor: "#33373B",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginTop: 5,
        color: "#fff",
        paddingHorizontal: 20,
    },

    inputPorcentaje:{
        width: "40%",
        marginLeft: 5,
    }
});
