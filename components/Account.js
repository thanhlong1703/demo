import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Account() {
    return (
        <View>
            <Text style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                padding: 20,
                borderBottomWidth: 1
            }}>Profile</Text>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 30,
                    borderBottomWidth: 1
                }}><Ionicons name="md-logo-dropbox" size={20} color="black" /> Order Tracking</Text>
                <TouchableOpacity style={{
                    position: 'absolute', right: 10, top: 20, zIndex: 1,
                    backgroundColor: 'white', padding: 5, borderRadius: 20
                }}>
                    <Ionicons name="chevron-forward" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 30,
                    borderBottomWidth: 1
                }}><Ionicons name="md-lock-closed-outline" size={20} color="black" /> Manage Password</Text>
                <TouchableOpacity style={{
                    position: 'absolute', right: 10, top: 20, zIndex: 1,
                    backgroundColor: 'white', padding: 5, borderRadius: 20
                }}>
                    <Ionicons name="chevron-forward" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 30,
                    borderBottomWidth: 1
                }}><FontAwesome name="address-book-o" size={20} color="black" /> Address Book</Text>
                <TouchableOpacity style={{
                    position: 'absolute', right: 10, top: 20, zIndex: 1,
                    backgroundColor: 'white', padding: 5, borderRadius: 20
                }}>
                    <Ionicons name="chevron-forward" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 30,
                    borderBottomWidth: 1
                }}><Ionicons name="md-mail-unread-outline" size={20} color="black" /> Notification</Text>
                <TouchableOpacity style={{
                    position: 'absolute', right: 10, top: 20, zIndex: 1,
                    backgroundColor: 'white', padding: 5, borderRadius: 20
                }}>
                    <Ionicons name="chevron-forward" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                marginTop:60
            }}>
                NEED HELP?
            </Text>
            <TouchableOpacity style={{
                marginLeft:100,
                marginTop:10,
                width: 200,
                borderRadius: 6,
                borderWidth:1,
                padding:20,
                justifyContent:'center',
                alignItems:'center',
                textAlign: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '600',
                }}>Contact us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginLeft:20,
                marginRight:20,
                marginTop:50,
                width: 355,
                borderRadius: 6,
                borderWidth:1,
                padding:20,
                justifyContent:'center',
                alignItems:'center',
                textAlign: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '600',
                }}>Sign Out</Text>
            </TouchableOpacity>
            
            

            
        </View>
    )
}
