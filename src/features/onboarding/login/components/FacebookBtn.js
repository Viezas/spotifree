import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

class FacebookBtn extends React.Component {
    render(){
        return (
            <TouchableOpacity style={styles.connection_btn}>
                <Image source={require('../../../../assets/img/facebook_logo.png')} style={styles.logo}/>
                <Text style={styles.btn_content}>Continuer avec Facebook</Text>
            </TouchableOpacity>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    connection_btn:{
        backgroundColor: '#1877F2',
        height: height*0.09,
        width: width*0.9,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: width*0.15,
        marginBottom: height*0.03
    },
    logo: {
        height: '100%',
        width: '15%',
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginRight: width*0.03
    },
    btn_content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default FacebookBtn;
