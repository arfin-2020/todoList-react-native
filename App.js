import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './assets/components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskswappers}>
          <Text style={styles.sectionTitle}> Today's Task</Text>
      </View>
      <View style={styles.items}>
        <Task text={'text1'}/>
        <Task text={'text1'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#E8EAED',
      },
      taskswappers:{
        paddingTop:80,
        paddingHorizontal:20,
      },
      sectionTitle:{
        fontSize:24,
        font:'bold'
      },
      items:{
        marginTop:30,
      }
});
