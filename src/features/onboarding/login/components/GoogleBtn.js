import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

class GoogleBtn extends React.Component {
    render(){
        return (
            <TouchableOpacity style={styles.connection_btn}>
                <Image source={require('../../../../assets/img/google_logo.png')} style={styles.logo}/>
                <Text style={styles.btn_content}>Continuer avec Google</Text>
            </TouchableOpacity>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    connection_btn:{
        borderWidth: 2,
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
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default GoogleBtn;
