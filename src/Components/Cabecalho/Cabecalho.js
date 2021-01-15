import React from "react";
import { Text, Image, View } from "react-native";
import estilo from "./estilo.js";

const Cabecalho = ({ nomeUsuario,urlImage }) => {
  return (
    <View style={estilo.cabecalho}>
      <Image
        source={{uri:urlImage}}
        style={estilo.fotoUsuario}
      />
      <Text style={estilo.nomeUsuario}>{nomeUsuario}</Text>
    </View>
  );
};

export default Cabecalho;
