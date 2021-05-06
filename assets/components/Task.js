import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task({text}) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
        item:{
            backgroundColor:'#fff',
            padding:15,
            borderRadius:10,
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-between',
            marginBottom:20,
        },
        itemLeft:{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        square:{
            height:24,
            width:24,
            backgroundColor:'#55BCF6',
            opacity: 0.4,
            borderRadius:5,
            marginRight:10,
        },
        itemText:{
            maxWidth:'80%',
        },
        circular:{
            height:12,
            width:12,
            borderRadius:5,
            borderWidth:2,
            borderColor:'#55BCF6'
        
        }
  });