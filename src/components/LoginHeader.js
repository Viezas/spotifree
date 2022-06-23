import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

class LoginHeader extends React.Component {
    goBack = () => { this.props.navigation.goBack(null) }
    render(){
        return (
            <View style={styles.nav}>
                <TouchableOpacity style={styles.back} onPress={this.goBack}>
                    <Image source={require('./../assets/img/left-chevron.png')} style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.nav_title}>Connexion</Text>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#ec0000',
        height: height*0.1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    back: {
        height: '100%',
        width: '20%',
        marginRight: width*0.1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        height: '50%',
        width: '50%',
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    nav_title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        width: '40%',
        textAlign: 'center'
    }
})
export default LoginHeader;
