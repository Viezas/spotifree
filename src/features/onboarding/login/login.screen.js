import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import LoginHeader from '../../../components/LoginHeader';
import FacebookBtn from './components/FacebookBtn';
import GoogleBtn from './components/GoogleBtn';
import PhoneBtn from './components/PhoneBnt';

class Login extends React.Component {
    render(){
        return (
            <View>
                <LoginHeader navigation={this.props.navigation}/>
                <View style={styles.actions_container}>
                    <Text style={styles.sub_title}>Connectez-vous simplement</Text>
                    <FacebookBtn/>
                    <GoogleBtn/>
                    <PhoneBtn navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    actions_container: {
        height: height*0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    sub_title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: height*0.04,
    },
})
export default Login;
