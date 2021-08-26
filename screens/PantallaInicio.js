import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ListaDeTurnos from "../components/ListaDeTurnos";
import ModalCancelarTurno from "../components/ModalCancelarTurno";

import { cancelarTurno, leerTurnos } from '../store/actions/turnos.action';

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const listaDeTurnos = useSelector((state) => state.turnos.listaDeTurnos);
  /* console.log("este", listaDeTurnos); */

  const [itemSeleccionado, setItemSeleccionado] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalCancelarTurno = (id) => {
    setItemSeleccionado(listaDeTurnos.find((item) => item.id === id));
    setModalVisible(true);
  };

  const handleCerrarModal = () => {
    setModalVisible(false);
  };

  const handleCancelarTurno = (id) => {
    dispatch(cancelarTurno(id));
    setModalVisible(false);
    setItemSeleccionado({});
    dispatch(leerTurnos());
  };

  useEffect(()=>{
    dispatch(leerTurnos());
  }, [])

  return (
    <View style={styles.container}>
      {listaDeTurnos.length > 0 ? (
        <View>
          <ListaDeTurnos
            listaTurnos={listaDeTurnos}
            handleModalCancelarTurno={handleModalCancelarTurno}
            navigation={navigation}
          />
        </View>
      ) : (
        <Text style={styles.textoSinTurnos}>Sin turnos</Text>
      )}

      <ModalCancelarTurno
        modalVisible={modalVisible}
        itemSeleccionado={itemSeleccionado}
        handleCerrarModal={handleCerrarModal}
        handleCancelarTurno={handleCancelarTurno}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textoSinTurnos: {
    textAlign: "center",
    paddingVertical: 20,
  },
});

export default HomeScreen;