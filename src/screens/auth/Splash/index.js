import React from 'react'
import {Text, Image, View, Pressable} from 'react-native'
import udemy1 from '../../../assets/udemy1.png'
import Button from '../../../components/Button/index.js'
import {styles} from './styles.js'

const Splash = ({navigation}) => {
    const onSignup = () => {
        navigation.navigate('Signup')
    }
    const onSignin = () => {
        navigation.navigate('Signin')
    }
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={udemy1} />
            <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
            </View>
            <Button onPress={onSignup} title='Sign Up' />
            <Pressable onPress={onSignin} hitSlop={20}>
            <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
            

        </View>
    )
}

export default Splash;