import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import ActionsContainer from './components/ActionsContainer';
import LogoContainer from './components/LogoContainer';

class Landing extends React.Component {
    render(){
        return (
            <View style={styles.main}>
                <LogoContainer></LogoContainer>
                <ActionsContainer navigation={this.props.navigation}></ActionsContainer>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    main:{
        height,
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})
export default Landing;
