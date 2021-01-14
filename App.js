import React, { Fragment } from "react";
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import {Cabecalho} from "./src/Components/Cabecalho";
import {Foto} from "./src/Components/Foto";

const largura = Dimensions.get("screen").width;
const informacoes = [
  { id: 1, usuario: "Ricardo" },
  { id: 2, usuario: "Marina" },
];
const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "black" }}>
            <Cabecalho nomeUsuario={item.usuario} />
            <Foto />
          </View>
        )}
      />
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
});

export default App;
