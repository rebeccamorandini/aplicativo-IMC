import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";
import ResultImc from "./Resultimc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setweight] = useState(null)
    const [message, setMessage] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular");

        function imcCalcular(){
            return setImc((weight/(height*height)).toFixed(2))
        }


        function validationImc(){
            if(weight != null && height != null){
                imcCalcular()
                setHeight(null)
                setweight(null)
                setMessage("seu IMC é = ")
                setTextButton("Calcular Novamente")
                return 
            }
            setImc(null)
            setTextButton("Calcular")
            setMessage("Preencha o peso e a altura")

        }


    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />
                <Text>Altura</Text>
                <TextInput
                placeholder="75.865"
                keyboardType="numeric"
                />

                <Button
                onPress={() => validationImc()}
                title= {textButton}
                color = "61dafb"
                />
        </View>
           <ResultImc messageResultImc={message} ResultImc={imc}/> 
        </View>
    );
}