import React from "react";
import { View, Text, TextInput} from "react-native";

export default function Form(){
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
            </View>
        </View>
    );
}