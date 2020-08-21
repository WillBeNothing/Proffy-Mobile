import React, { useState} from 'react'
import {View, ScrollView, Text, TextInput, Platform} from 'react-native'
import {Picker} from '@react-native-community/picker'
import DataTimePicker from '@react-native-community/datetimepicker'
import * as Device from "expo-device"
import asyncStorage from '@react-native-community/async-storage'


import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { BorderlessButton, RectButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import api from '../../services/api'






function TeacherList() {


var deviceOS;

const [favorite, setFavorite] = useState([])


function LoadFavorites() {
    asyncStorage.getItem('favorites').then(response => {
        if(response) {
            const favoritedTeachers = JSON.parse(response)
            const favoritedTeachersID = favoritedTeachers.map(teacher => teacher.id)
            
            setFavorite(favoritedTeachersID)
        }
    })
}


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const device = Device.modelId

    if(device === null) {
        deviceOS = "android"
    } else {
        deviceOS = "ios"
    }
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
 
  
    const showTimepicker = () => {
      showMode('time');
    };
   
   
    const [Teacher, setTeacher] = useState([])
    var [filtersVisible, setfiltersVisible] = useState(false)
    var [AlreadyList, setAlreadyList] = useState(false)
    
    function handleToggleFilterVisible() {
        setfiltersVisible(!filtersVisible)
        LoadFavorites();

    }
    const hour = date.getHours()
    let minutes = date.getUTCMinutes().toString()
    const length = minutes.length

    if(length === 1) {
        minutes = `0${minutes}`
    }

    const realdate = `${hour}:${minutes}`
    
     async function handleFilterSubmit() {
       
        setAlreadyList(true)
        const response =  await api.get("classes", {
            params : {
                subject,
                week_day,
                time: realdate
            }
        }

        

        
        )
        setfiltersVisible(false)

        setTeacher(response.data)
        console.log(device)

    }
    
    const [subject, setsubject] = useState('')
    const [week_day, setweek_day] = useState('')

   

    
    return(
        <View style={styles.container}>
            <ScrollView>
            <PageHeader title="Proffy Disponíveis" headerRight={
                (
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name='filter' size={20} color="#fff"/>
                    </BorderlessButton>
                )
            }>
           { filtersVisible &&  ( deviceOS === "android" ? (
               <View style={styles.searchForm}>
               <Text style={styles.label}>Matéria</Text>
               <View style={styles.input}>


               <Picker 
               selectedValue={subject}
               default="Selecione a sua materia"
               style={{width: '100%'}}
               onValueChange={text=> setsubject(text)}
               mode="dialog"
               >
                <Picker.Item value="Default" label= "Selecione a sua materia" />
               <Picker.Item value="Artes" label= "Artes" />
               <Picker.Item value="Química" label= "Química" />
               <Picker.Item value="Física" label= "Física" />
               <Picker.Item value="Biologia" label= "Biologia" />
               <Picker.Item value="Matemática" label= "Matemática" />
               <Picker.Item value="Inglês" label= "Inglês" />
               <Picker.Item value="Português" label= "Português" />
               <Picker.Item value="Sociologia" label= "Sociologia" />
               <Picker.Item value="História" label= "História" />
               <Picker.Item value="Filosofia" label= "Filosofia" />
               <Picker.Item value="Educação Física" label= "Educação Física" />
               </Picker>

               
               </View>


               <View style={styles.inputGroup}>
                   <View style={styles.inputBlock}>
                   <Text style={styles.label}>Dia da semana</Text>
                       <View style={styles.input}>
                           <Picker 
                               selectedValue={week_day}
                               onValueChange={text=> setweek_day(text)}
                               style={{width: "100%", backgroundColor: "#fff"}}
                               mode="dialog"
                               
                               
                           >
                           <Picker.Item value="Default" label= "Selecione o dia" />
                           <Picker.Item value="0" label= "Domingo" />
                           <Picker.Item value="1" label= "Segunda" />
                           <Picker.Item value="2" label= "Terça" />
                           <Picker.Item value="3" label= "Quarta" />
                           <Picker.Item value="4" label= "Quinta" />
                           <Picker.Item value="5" label= "Sexta" />
                           <Picker.Item value="6" label= "Sábado" />
                   
                           </Picker>
                       </View>
                   </View>

                   <View style={styles.inputBlock}>
                       <Text style={styles.label}>Horário</Text>
                       <View>
                           <RectButton 
                           onPress={showTimepicker} 
                           style={styles.input}>
                               <Text>{`${realdate}`}</Text>
                           </RectButton>
                       </View>
                   {show && (
                       <DataTimePicker
                       testID="dateTimePicker"
                       value={date}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange}
                       />
                   )}
                   </View>
               </View>


               <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                   <Text style={styles.submitButtonText}>
                       Filtrar
                   </Text>
               </RectButton>
           </View>
           ): ( // iphone
                <View style={styles.searchForm}>
                   <Text style={styles.label}>
                        Matéria
                   </Text>
                   <TextInput 
                   style={styles.input}
                   value={subject}
                   onChange={e=> setsubject(e)}
                   >
                    </TextInput>   
                   </View>
           ))}
            </PageHeader>
            
           
           {AlreadyList ? (
           <View style={[styles.teacherItem, styles.list]}>
                {Teacher.map((teacher) => <TeacherItem 
                key={teacher.id} 
                teacher={teacher}
                favorited={favorite.includes(teacher.id)}
                />
                )
            }                  
            </View>
            ) : (<>
            <View style={styles.apresentationBlock}>
                <Text style={styles.apresentation}>
                    Filtre para encontar os Proffys que são a sua cara 
                </Text>
            </View>
            
            </>
            )} 




            
           
            
            
            </ScrollView>
        </View>
    )
}

export default TeacherList