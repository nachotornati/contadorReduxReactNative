// App.js

import React from 'react';
import { Text, View, Button, StyleSheet, Pressable} from 'react-native';
import { Provider, useSelector, useDispatch } from "react-redux";
import allReducers from "./Redux/reducers/index.js";
import { createStore } from "redux";
import CounterLabel from './CounterLabel.js';

import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./Redux/actions/index.js";

//The created store
const store = createStore(
  allReducers,
);

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <View >
      {auth ? (
        <View style={styles.screenContainer}>
          <Text style={styles.counter}>Counter</Text>
          <CounterLabel counter={counter}></CounterLabel>
          <Pressable style={styles.button} title='increment' onPress={() => { dispatch(increment()) }}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <Pressable style={styles.button} title='increment' onPress={() => dispatch(decrement())}>
            <Text style={styles.buttonText} >-</Text>
          </Pressable>
          <Pressable style={styles.button} title='increment' onPress={() => dispatch(reset())}>
            <Text style={styles.buttonText} >RESET</Text>
          </Pressable>


          <Pressable style={styles.button} title='increment' onPress={() => dispatch(logOut())}>
            <Text style={styles.buttonText} >CERRAR SESION</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.screenContainer}>
          <Text style={styles.counter}>¡Bienvenido!</Text>
          <Pressable style={styles.button} title='increment' onPress={() => dispatch(logIn())}>
            <Text style={styles.buttonText}>INICIAR SESION</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default function App() {

  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 100
  },
  counter:{
    fontSize: 30,
    textAlign: 'center',
    marginBottom:30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9145B6',
    marginBottom:5,

  },
  buttonText:{
    color:'white',
    fontSize:15,
  }
});