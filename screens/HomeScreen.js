import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{width: 100, height: 100, resizeMode: "contain"}}
                    source={{uri: "https://links.papareact.com/gzs"}}
                />

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI='GooglePlacesSearch'
                    styles={{ container: { flex: 0, }, textInput: { fontSize:18, } }}
                    debounce={400}
                    placeholder='Where from?'
                    // onPress={(data, details = null) => {
                    //     // 'details' is provided when fetchDetails = true
                    //     console.log(data, details);
                    // }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
