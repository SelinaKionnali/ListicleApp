import React, { useState } from 'react'
import { TextInput, View, Text, Pressable, Image} from 'react-native'
import { styles } from './styles';
import eyeIcon from '../../assets/eye.png'
import closedEyeIcon from '../../assets/eye_closed.png'


const Input = ({ label, placeholder, isPassword, value, onChangeText }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />

                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? closedEyeIcon : eyeIcon} />
                        </Pressable>
                    ) : null}
            </View>
        </View>
    )
}

export default Input;