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


class ResetPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            code: '',
            username: props.route.params.username
        }
    }

    onChangeCode = async (code) => {
        const {username} = this.state
        this.setState({
            code
        })
        if(code.length == 6){
            try {
			    const response = await Auth.confirmSignUp(username, code);
                this.props.navigation.navigate('loggedIn')
			} catch (error) {
                console.log('error confirming sign up', error);
			}
        }
    }
    
    render(){
        return (
            <View>
                <LoginHeader navigation={this.props.navigation}/>
                <TextInput  
                    onChangeText={newValue => this.onChangeCode(newValue)}
                    keyboardType="phone-pad" 
                    style={styles.input} 
                    value={this.state.code}
                    autoFocus >
                </TextInput>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    input: {
        width: '100%',
        paddingLeft: width*0.05,
        fontSize: 22,
        borderWidth: 2
    },
})
export default ResetPassword;
