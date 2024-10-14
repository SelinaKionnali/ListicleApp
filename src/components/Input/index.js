import React, { useState } from 'react'
import { TextInput, View, Text, Pressable, Image} from 'react-native'
import { styles } from './styles';
import eyeIcon from '../../assets/eye.png'


const Input = ({ label, placeholder, isPassword }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
            <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />
            <Pressable onPress={onEyePress}>
                <Image source={eyeIcon} />
            </Pressable>
            </View>
        </View>
    )
}

export default Input;