import React from 'react';
import { Text, View, Button, StyleSheet, Pressable, Animated} from 'react-native';
import { VirtualizedListCellContextProvider } from 'react-native/Libraries/Lists/VirtualizedListContext';

const tamanoContador = 30;

export default class CounterLabel extends React.Component{
    constructor(){
        super();
        this.state = {
            animateXY: new Animated.ValueXY({x:0,y:0}),
            font:new Animated.Value(tamanoContador),
        }
        console.log(this.state)
    }

    agrandarContador(){
        Animated.timing(this.state.font,{
            toValue:80,
            duration:2000,
            useNativeDriver: false,
        }).start();
        
    }

    achicarContador(){
        Animated.timing(this.state.font,{
            toValue:tamanoContador,
            duration:2000,
            useNativeDriver: false,
        }).start();
        
    }

    render(){
        return(
            <View>
            <Animated.Text style={{
                fontSize: this.state.font,
                textAlign: 'center',
                marginBottom:30,
              }}>{this.props.counter}</Animated.Text>
             <Pressable style={styles.button} title='increment' onPress={() => this.agrandarContador()}>
            <Text style={styles.buttonText}>AGRANDAR</Text>
          </Pressable>
          <Pressable style={styles.button} title='increment' onPress={() => this.achicarContador()}>
            <Text style={styles.buttonText}>ACHICAR</Text>
          </Pressable>
            </View>

              
        )
    }


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