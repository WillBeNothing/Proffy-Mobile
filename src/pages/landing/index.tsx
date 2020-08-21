import React, { useState, useEffect } from 'react'
import {View, Image, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/icons/study.png'
import giveClassesIcon from '../../assets/icons/give-classes.png'
import heartIcon from '../../assets/icons/heart.png'
import api from '../../services/api'



function LandingPage() {
    const [TotalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(res => {
            const {total} = res.data
            setTotalConnections(total)
        })
    }, [])

    const {navigate} = useNavigation()

    function handleNAvigateToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNAvigateToStudyPage() {
        navigate('study')
    }
    return(
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>
                Seja Bem-Vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                style={[styles.button, styles.buttonPrimary]}
                onPress={handleNAvigateToStudyPage}
                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                style={[styles.button, styles.buttonSecondary]} 
                onPress={handleNAvigateToGiveClassesPage}>
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                
                Total de {TotalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>

       
    )
}

export default LandingPage