import React from 'react'
import {TouchableOpacity, Image} from 'react-native'
import {styles} from './styles.js'
import googleIcon from '../../assets/Vector.png'

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6}  style={styles.container}>
            <Image style={styles.image} source={googleIcon}/>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);