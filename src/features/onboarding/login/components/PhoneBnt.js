import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

class PhoneBtn extends React.Component {
    goToLoginWithPhoneScreen = () => { this.props.navigation.navigate('loginWithPhone') }
    render(){
        return (
            <TouchableOpacity style={styles.connection_btn} onPress={this.goToLoginWithPhoneScreen}>
                <Image source={require('../../../../assets/img/phone_logo.png')} style={styles.logo}/>
                <Text style={styles.btn_content}>Avec votre numéro !</Text>
            </TouchableOpacity>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    connection_btn:{
        backgroundColor: '#ec0000',
        height: height*0.09,
        width: width*0.9,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: width*0.15,
    },
    logo: {
        height: '100%',
        width: '10%',
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginRight: width*0.05
    },
    btn_content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})
export default PhoneBtn;
