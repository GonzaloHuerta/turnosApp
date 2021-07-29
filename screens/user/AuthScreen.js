import React, { useReducer, useCallback } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, Button } from "react-native";
import { useDispatch } from "react-redux";

import { signup } from "../../store/actions/auth.actions";

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) =>{
  
  if(action.type === FORM_INPUT_UPDATE){
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    let updateFormIsValid = true;

    for(const key in updatedValidities){
      updateFormIsValid = updateFormIsValid && updatedValidities[key];
    }

    return{
      formIsValid: updateFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
    
  }
  else{
    return state;
  }
}
import Input from "../../components/Input";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities:{
      email: false,
      password: false
    },
    formIsValid: false
  });

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity)=>{
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      input: inputIdentifier,
      value: inputValue,
      isValid: inputValidity,
    });
  }, [dispatchFormState])

  const onSignupHandler = async () => {
    try {
      await dispatch(signup(formState.inputValues.email, formState.inputValues.password));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>App de turnos: LOGIN</Text>
        <View>
          <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Por favor ingrese un email válido"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
          <Input
            id="password"
            label="Contraseña"
            keyboardType="default"
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorText="Por favor ingrese una clave de al menos 6 caracteres"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button title="ACCEDER" onPress={() => {}} />
          </View>
          <View style={styles.button} onPress={() => {}}>
            <Button title="REGISTRARSE" onPress={onSignupHandler} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
  },
  container: {
    width: "80%",
    maxWidth: 400,
    height: "50%",
    maxHeight: 400,
    padding: 12,
  },
  footer: {
    marginTop: 24,
  },
  button: {
    marginBottom: 8,
  },
});

export default AuthScreen;
