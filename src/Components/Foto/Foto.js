import React, { Fragment, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import estilo from "./estilo";

const Foto = ({ urlFoto, descricao, numeroLikes }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(numeroLikes);

  const curtirFoto = () => {
    let qnt = likes;
    if (curtiu) {
      qnt--;
    } else {
      qnt++;
    }
    setLikes(qnt);
    setCurtiu(!curtiu);
  };

  return (
    <Fragment>
      <Image source={{ uri: urlFoto }} style={estilo.imagem} />
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={curtirFoto}>
          <Image style={estilo.like} source={validarLike(curtiu)} />
        </TouchableOpacity>

        <Text style={estilo.descricaoFoto}>{likes} curtidas</Text>
      </View>
      <Text style={estilo.numeroCurtidas}>{descricao}</Text>
    </Fragment>
  );
};

const validarLike = (curtiu) => {
  if (curtiu > 0) {
    return require("../../../res/img/s2-checked.png");
  } else {
    return require("../../../res/img/s2.png");
  }
};

export default Foto;
