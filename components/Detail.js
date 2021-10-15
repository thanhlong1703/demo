import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function () {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <View style={{
        justifyContent:'center'
      }}>
      <Image style={{
        width:'80%',
        height: 500,
        marginTop:10,
        marginLeft: 35,
        justifyContent: 'center',
        alignItems: 'center',

      }} source={require('baitap/img/01.jpg')}/>
      </View>
      <Text style={{
        color: 'black',
        fontWeight:'600',
        fontSize: 20,
        marginTop:20,
        marginLeft: 20,
      }}>Twill Double-Breasted Trench Coat</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginLeft: 20,}}>
          <Text style={{ fontWeight: '600', marginRight: 10, fontSize: 18, color: '#8c3454' }}>$39.99</Text>
          <Text style={{ fontWeight: '600', fontSize: 16, textDecorationLine: 'line-through' }}>$49.99</Text>
          <Rating
          onFinishRating={() => { }}
          imageSize={20}
          style={{ paddingVertical: 10, justifyContent: 'flex-end', alignItems: 'flex-end', }}/>
        </View>
        <Text style={{ fontSize: 12, color: '#8c3454', lineHeight: 18, marginLeft:20,  }}>Up to 60% Off Almost Everything!</Text>
        <View style={{
          flexDirection:'row',
          marginLeft:20,
          marginTop: 30,
          borderTopWidth:1
        }} >
          <View style={{
            height: 25, width: 25,
            backgroundColor: 'white', borderRadius: 25 / 2,
            borderWidth: 1, borderColor: 'black',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{ height: 20, width: 20, backgroundColor: 'black', borderRadius: 10, }}></View>
            
          </View>
          <View style={{
            height: 25, width: 25,
            backgroundColor: 'white', borderRadius: 25 / 2,
            borderWidth: 1, borderColor: 'gray',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{ height: 20, width: 20, backgroundColor: 'gray', borderRadius: 10, }}></View>
          </View>
        </View>
        <View style={{
          padding:20,
        }}>
        <TouchableOpacity style={{
            borderWidth:1,
            backgroundColor: '#e8bd48',
            width: 350,
            padding:20,
            marginTop:50,
            justifyContent:'center',
            alignItems: 'center',
            marginBottom: 100,


        }}>
          <Text style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '600'
          }}>ADDED TO BAG</Text>
        </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}
