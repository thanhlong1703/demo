import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function Wishlist() {
    return (
        <View style={{padding:20}}>
            <Text style={
                {textAlign: 'center',
                color: 'black',
                fontSize: 20
            }
                }>Your Wishlist</Text>
            <Text style={{
                color: 'black',
                fontSize:18,
                marginTop:10,
        
            }}>Frayed Distressed Denim Shorts</Text>
            <View style={{flexDirection:'row'}}>
                <View style={{flex: 1}}>
                    <Image style={{
                        width: 150,
                        height:250,
                        marginTop:10,
                    }} source={require('baitap/img/01.jpg')}/>
                </View>
                <View style={{flex:1}}>
                <Text style={{
                    color: 'black',
                    textAlign:  'left',
                    justifyContent: 'center',
                    marginTop:30
                }}>SKU#: <Text style={{fontWeight: 'bold'}}> 012123401</Text></Text>
                <TouchableOpacity style={{
                    backgroundColor:'#bdbdbd',
                    padding:5,
                    borderRadius: 5,
                    marginTop: 100
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        textAlign: 'center',
                        
                    }}>Remove form wishlist</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Text style={{
                color: 'black',
                fontSize:18,
                marginTop:10,
        
            }}>Frayed Distressed Denim Shorts</Text>
            <View style={{flexDirection:'row'}}>
                <View style={{flex: 1}}>
                    <Image style={{
                        width: 150,
                        height:250,
                        marginTop:10,
                    }} source={require('baitap/img/02.jpg')}/>
                </View>
                <View style={{flex:1}}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize:20,
                    marginTop: 20
                }}>$31.99</Text>
                <Text style={{
                    color: 'black',
                    textAlign:  'left',
                    justifyContent: 'center',
                    marginTop:10
                }}>SKU#: <Text style={{fontWeight:'bold'}}>012123401</Text></Text>
                <Text style={{
                    color: 'black',
                    textAlign:  'left',
                    justifyContent: 'center',
                }}>Color: <Text style={{fontWeight:'bold'}}>CAMEL</Text></Text>
                <Text style={{
                    color: 'black',
                    textAlign:  'left',
                    justifyContent: 'center',
                }}>Size: <Text style={{fontWeight:'bold'}}>XL</Text></Text>
                <TouchableOpacity style={{
                    backgroundColor:'#bdbdbd',
                    padding:5,
                    borderRadius: 5,
                    marginTop: 30
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        textAlign: 'center',
                        
                    }}>Remove form wishlist</Text>
                </TouchableOpacity>
                </View>
                
                
            </View>
            
        </View>
    )
}
