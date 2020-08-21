import React, { useState} from 'react'
import {View, ScrollView} from 'react-native'
import asyncStorage from '@react-native-community/async-storage'
import {useFocusEffect} from '@react-navigation/native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'


function FavoritesTeachers() {

    const [favorite, setFavorite] = useState([])

    function LoadFavorites() {
        asyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                
                
                setFavorite(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => {
        LoadFavorites()
    })
    return(
        <View style={styles.container}>
            <ScrollView >
        <PageHeader title="Meus Proffys Favoritos"/>
            <View style={styles.list}>
                {favorite.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                        />
                    )

                })}
            </View>
            </ScrollView>
    </View>
    )
}

export default FavoritesTeachers