import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, YellowBox, Button} from 'react-native';
import Forms from "./src/components/Forms"; 
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";
import color from "./src/utils/colors";


YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App() {
  const [numero1, setNumero1]= useState(null);
  const [numero2, setNumero2] = useState(null);
  const [operacion, setOpera] = useState(null);
  const [resultado, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if(numero1 && numero2 && operacion)cal();
    else reset();

  }, [numero1, numero2, operacion])

  const cal=() =>{
    reset();
    if(!numero1){
      setError("Añade el primer numero.");
    }else if(!numero2){
      setError("Añade el segundo numero.");
    }else if(!operacion){
      setError("Selecciona la operacion a realizar.");
    }else{
      
      if (operacion == "suma"){
         const k = numero1 + numero2;
         
         setResult({
            data: k,
          })
      }else if(operacion == "resta"){
       const  k = numero1 - numero2;
      
       setResult({
          data: k,
        })
      }else if(operacion == "multiplicacion"){
       const k = numero1 * numero2;
       setResult({
            data: k
        })
      }else if(operacion == "divicion"){
       const k = numero1 / numero2;

       setResult({
            data: k,
         })
      }
    }

  }

  const reset = () =>{
    setError ("");
    setResult (null);
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
        <SafeAreaView style={[styles.safeArea, styles.content]}>
          <View style={styles.background}/>
          <Text style={styles.titleApp}>Calculadora</Text>
          <Forms 
            setNumero1={setNumero1}
            setNumero2={setNumero2}
            setOpera={setOpera}
          />
          <Result
            numero1={numero1}
            numero2={numero2}
            operacion={operacion}
            resultado={resultado} 
            error={error}
          />
        </SafeAreaView>
        
        <Footer cal={cal}/>
      </>
  );
}


const styles = StyleSheet.create({
  
  safeArea:{
    height: 80,
    alignItems: "center",
  },

  background:{
    backgroundColor: color.PRIMARY_COLOR,
    height: 80,
    width: "100%",
    position: "absolute",
  },

  titleApp:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    margin: 20,
  }, 
  
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
