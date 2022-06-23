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
import LoginHeader from '../../../components/LoginHeader';
import { Auth } from 'aws-amplify'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            phone: '',
            can_continue: false,
        }
    }

    onChangePhone = (phone) => {
        let can_continue = false
        this.setState({
            phone
        })
        if(phone.length == 9){
            can_continue = true;
        }
        this.setState({
            can_continue
        })
    }

    login = async () => {
        const { phone } = this.state
        try {
            const { user } = await Auth.signUp({
                username: `+33${phone}`,
                password: 'Password-1234'
            });
            this.props.navigation.navigate('resetPassword', {username: `+33${phone}`})
        } catch (error) {
            if (error.code == "UsernameExistsException") {
                try {
                    const user = await Auth.signIn(`+33${phone}`, 'Password-1234');
                    this.props.navigation.navigate('loggedIn')
                } catch (error) {
                    if (error.code == "UserNotConfirmedException") { 
                        this.props.navigation.navigate('resetPassword', {username: `+33${phone}`})
                    } 
                    else {
                        console.log('error signing in', error);
                    }
                }
            }
            else {
                console.log('error signing up:', error);
            }
        }
    }

    render(){
        return (
            <View>
                <LoginHeader navigation={this.props.navigation}/>
                <View style={styles.form_container}>
                    <View style={styles.input_container}>
                        <View style={styles.logo_container}>
                            <Image source={require('../../../assets/img/french_logo.png')} style={styles.logo}/>
                        </View>
                        <Text style={styles.text_bold}> +33 </Text>
                        <TextInput  
                            onChangeText={newValue => this.onChangePhone(newValue)}
                            keyboardType="phone-pad" 
                            style={styles.input} 
                            value={this.state.phone}
                            autoFocus >
                        </TextInput>
                    </View>
                    <View style={styles.disclaimer}>
                        <Text style={styles.text}>En cliquant sur "CONTINUER", vous acceptez la </Text>
                        <TouchableOpacity>
                            <Text style={[styles.link, styles.text]}>Politique de Confidentialité,</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}> les </Text>
                        <TouchableOpacity>
                            <Text style={[styles.link, styles.text]}>CGU</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}> et les </Text>
                        <TouchableOpacity>
                            <Text style={[styles.link, styles.text]}>CGV</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}> de Cajoo</Text>
                    </View>
                    <TouchableOpacity 
                        style={this.state.can_continue ? styles.btn : styles.disabled} 
                        disabled={!this.state.can_continue}
                        onPress={this.login}
                    >
                        <Text style={styles.btn_content}>CONTINUER</Text>
                    </TouchableOpacity>
                </View>
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
    input_container: {
        marginTop: -height*0.6,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#ec0000',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: width*0.9,
        height: height*0.1,
    },  
    logo_container: {
        width: '20%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: '70%',
        resizeMode: 'contain',
    },
    text_bold: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        width: '60%',
        height: '100%',
        paddingLeft: width*0.05,
        fontSize: 22,
    },
    disclaimer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: width*0.01,
        marginBottom: height*0.03,
        position: 'absolute',
        bottom: 400,
    },
    text: {
        fontSize: 15,
    },
    link: {
        color: '#ec0000',
        textDecorationLine: 'underline',
    },
    btn: {
        backgroundColor: '#ec0000',
        width: width*0.9,
        height: height*0.07,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 350,
    },
    btn_content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    disabled: {
        backgroundColor: '#ca5d5d',
        width: width*0.9,
        height: height*0.07,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 350,
    },
})
export default LoginForm;
