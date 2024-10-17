import React, { useState } from 'react'
import {View, Pressable, Image, Text} from 'react-native'
import {styles} from './styles.js'
import BackArrow from '../../assets/BackArrow.png'
import searchIcon from '../../assets/search.png'
import logoutIcon from '../../assets/Logout.png'
import Input from '../Input/index.js'

const Header = ({title, onBackPress, onLogout, showSearch, showBack, showLogout}) => {

    const [showSearchInput, setShowSearchInput] = useState(false)

    const onSearchClick = () => {
        setShowSearchInput(value => !value)
    }

    return (
        <View>
       <View style={styles.container}>
        {showBack ? (
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.icon} source={BackArrow} />
            </Pressable>
        ): showSearch ? (
            <Pressable hitSlop={20} onPress={onSearchClick}>
                <Image style={styles.icon} source={searchIcon} />
            </Pressable>
        ): <View style={styles.space}/>}

        <Text style={styles.title}>{title}</Text>

        {showLogout ? (
            <Pressable hitSlop={20} onPress={onLogout}>
                <Image style={styles.icon} source={logoutIcon} />
            </Pressable>
        ): <View style={styles.space}/>}
       </View>
       {showSearchInput ? (
        <Input placeholder="Type your keyword..." />
       ): null}
       </View>
    )
}

export default Header;