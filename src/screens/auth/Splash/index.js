import React from 'react'
import {Text, Image, View, Pressable} from 'react-native'
import {styles} from '../Splash/styles.js'
import udemy1 from '../../../assets/udemy1.png'
import Button from '../../../components/Button/index.js'


const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={udemy1} />
            <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
            </View>
            <Button title='Sign Up' />
            <Pressable hitSlop={20}>
            <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
            

        </View>
    )
}

export default Splash;