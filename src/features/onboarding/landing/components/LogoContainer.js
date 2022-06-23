import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
const {width, height} = Dimensions.get('window')

class LogoContainer extends React.Component {
    render(){
        return (
            <View style={styles.logo_container}>
                <Image source={require('../../../../assets/img/cajoo_logo.png')} style={styles.logo}/>
                <Text style={styles.sub_title}>Vos courses en 3 clics !</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo_container:{
        marginBottom: height*0.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: width*0.7,
        resizeMode: 'contain',
    },
    sub_title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
})
export default LogoContainer;
