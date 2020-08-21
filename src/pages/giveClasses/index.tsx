import React from 'react'
import {View, ImageBackground, Image, Text, Linking} from 'react-native'
import styles from './styles'


import BGImg from '../../assets/images/give-classes-background.png'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '../../components/PageHeader'
import BackIcon from "../../assets/icons/back.png"



function GiveClasses() {

    const {goBack} = useNavigation()

    function handleNAvigateToLandingPage() {
        goBack()
    }

    function handleWeb() {
        Linking.openURL("http://192.168.0.100:3000/teach")
    }
    return(

        
        <View style={styles.container}> 
        <BorderlessButton onPress={handleNAvigateToLandingPage}
         style={styles.header}>
                <Image source={BackIcon} />
                </BorderlessButton>
            <ImageBackground resizeMode="contain" source={BGImg} style={styles.content}>
                
                <Text style={styles.title}>
                    Quer ser um Proffy? {'\n'}
                    <Text style={styles.description}>
                        {'\n'}
                        Para começar, você precisa se inscrever na plataforma Web. {'\n'}
                    
                    </Text>
                </Text>

                
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleWeb}>
                <Text style={styles.okText}>Vamos?</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses