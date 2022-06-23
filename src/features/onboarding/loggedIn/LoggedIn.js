import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Auth } from 'aws-amplify'

class LoggedIn extends React.Component {
    logout = async () => {
        try {
            const response = await Auth.signOut();
            this.props.navigation.navigate('landing')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    render(){
        return (
            <View style={styles.form_container}>
                <Text> Félicitation, vous êtes connecté !</Text>
                <TouchableOpacity onPress={this.logout} style={styles.btn}>
                    <Text style={styles.btn_content}>Logout !</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    form_container: {
        height: height,
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    btn: {
        backgroundColor: '#ec0000',
        width: width*0.5,
        height: height*0.07,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
})
export default LoggedIn;
