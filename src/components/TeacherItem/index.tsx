import React, { useState } from 'react'
import { View , Image, Text, Linking} from 'react-native'
import asyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'



import heartOutLineIcon from '../../assets/icons/heart-outline.png'
import unfavorite from '../../assets/icons/unfavorite.png'
import WhatsappIcon from '../../assets/icons/whatsapp.png'
import api from '../../services/api'




export interface Teacher {
    id: number,
    avatar: string,
    name: string,
    bio: string,
    subject: string,
    cost: string,
    whatsapp: string,

}

interface ItemProps {
teacher: Teacher
favorited: boolean
}

const TeacherItem:React.FC<ItemProps> = ({teacher, favorited}) => {

    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinktoWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+550${teacher.whatsapp}`)
        api.post('connections')
    }

    async function handleToogleFavorite() {
       
        const favorites = await asyncStorage.getItem('favorites')
            let favoritesArray = []

            if(favorites) {
                favoritesArray = JSON.parse(favorites)
            }
        if(isFavorited) {
            const favoritedIndex = favoritesArray.findIndex((teacherItem: Teacher) =>  teacherItem.id === teacher.id)
            favoritesArray.splice(favoritedIndex, 1)
            
            setIsFavorited(false)
        } else {

           
            
            setIsFavorited(true)
            favoritesArray.push(teacher)
            
            
        }

        await asyncStorage.setItem('favorites',JSON.stringify(favoritesArray))

        
    }
    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image 
                style={styles.avatar}
                source={{uri: teacher.avatar}} 
                />

                

                <View style={styles.info}>
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>
                    <Text style={styles.subject}>
                        {teacher.subject}
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preco/Hora: {"   "} 
                    <Text style={styles.priceValue}>
                        R$ {teacher.cost},00
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton
                     style={[styles.favorite, isFavorited ? styles.AlreadyFavorite : {}]}
                     onPress={handleToogleFavorite}
                     >
                        {isFavorited 
                        ? <Image source={unfavorite}/>
                        : <Image source={heartOutLineIcon}/>
                    }
                        
                        
                    </RectButton>

                    <RectButton style={styles.contact} onPress={handleLinktoWhatsapp}>
                        <Image source={WhatsappIcon}/>
                        <Text style={styles.contactbuttonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
                
            </View> 
        </View>
    )
}

export default TeacherItem