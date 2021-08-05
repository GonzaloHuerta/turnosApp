import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ListaDeTurnos from "../components/ListaDeTurnos";
import ModalCancelarTurno from "../components/ModalCancelarTurno";

import { cancelarTurno, leerTurnos } from '../store/actions/turnos.action';

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const listaDeTurnos = useSelector((state) => state.turnos.listaDeTurnos);
  /* console.log(listaDeTurnos) */

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
        <Text style={styles.textoSinTurnos}>Sin turnos para hoy</Text>
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
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  textoSinTurnos: {
    textAlign: "center",
    paddingVertical: 20,
  },
  botonIrATurnos: {
    alignItems: "center",
    backgroundColor: "#2B9EB3",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  textoBotonIrATurnos: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default HomeScreen;