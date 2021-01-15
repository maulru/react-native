import React, { useState, useEffect } from "react";
import { ScrollView, FlatList, View } from "react-native";
import lerFotos from "./src/api/feed";
import { Cabecalho } from "./src/Components/Cabecalho";
import { Foto } from "./src/Components/Foto";

const App = () => {
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "black" }}>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              numeroLikes={item.likes}
            />
          </View>
        )}
      />
    </ScrollView>
  );
};

export default App;
