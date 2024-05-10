//primeiro criamos arquivo Home.js na pasta screens
import React, {Component} from "react";
import { Text, View } from "react-native";

export default class LocalizacaoScreen extends Component {
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text>Localização da EEI</Text>

            </View>
        )
    }
}