import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function Bag() {
    return (
        <View>
            <View style={{
                padding:20,
                height:70,
                backgroundColor:'black'
                }}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>You've Earned Free Shipping</Text>
            </View>
            <View style={{
                padding:20,
                margin:20,
                borderRadius: 6,
                borderWidth:1,
                borderColor:'red'
            
                }}>
                <Text style={{
                    color: 'red',
                    fontWeight:'bold',
                    fontSize:18
                }}>
                    Remove 1 unavailable item to continue.
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    height:30,
                    width:120,
                    justifyContent:'center',
                    
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:18,
                        textAlign: 'center'
                    }}>
                        Remove All
                    </Text>
                </TouchableOpacity>
                <View style={{
                    padding:20,
                    marginTop:20,
                    borderRadius: 6,
                    borderWidth:1,
                    borderColor:'red'
                }}>
                    <Text style={{
                        color: 'red',
                        fontWeight:'bold',
                        fontSize:18

                    }}>
                        Remove unavailable item to continue.
                    </Text>
                    <TouchableOpacity style={{
                    backgroundColor: 'red',
                    height:30,
                    width:120,
                    justifyContent:'center',
                    
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:18,
                        textAlign: 'center'
                    }}>
                        Remove Item
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        marginTop:10,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        
                    }}
                />
                <Text style={{
                    color: 'black',
                    textAlign:  'center',
                    fontSize:17

                }}>WESC Let's Get Weird Graphic Tee</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <Image style={{
                            width: 130,
                            height:230,
                            marginTop:10,
                        }} source={require('baitap/img/01.jpg')}/>
                    </View>
                    <View style={{flex: 1}}>
                    <Text style={{
                        justifyContent:'center',
                        textAlign: 'left',
                        marginTop:20
                    }}><Text style={{
                        fontSize:20, 
                        color:'red',
                        fontWeight: 'bold'}}>$32.00</Text>
                        <Text style={{
                        }}>$72.00</Text>
                        </Text>
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
                    <Text style={{
                        color:'red',
                        marginTop:50,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 15
                    }}>Out of stock</Text>
                    </View>
                </View>
                </View>
            </View>
            <TouchableOpacity style={{
                borderRadius: 6,
                backgroundColor: '#eff538',
                justifyContent:'center',
                alignItems: 'center',
                padding:20
            }}>
                <Text style={{
                    color: 'black',
                    fontSize:20,
                    fontWeight:'bold'
                }}>
                    PROCEED TO CHECKOUT
                </Text>
            </TouchableOpacity>
        </View>


    )
}
