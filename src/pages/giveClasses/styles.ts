import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8257E5",
        flex: 1,
        justifyContent: "center",
        padding: 40,
        
        
    },
    content:{
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#ffff',
        fontSize: 36,
        lineHeight: 37,
        maxWidth: 400,
        
        

    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,


    },
    okButton: {
        marginVertical: 40,
        backgroundColor: "#04d351",
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    okText: {
        color: '#ffff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
    description2: {
        marginTop: 0,
        color: '#d4c2ff',
        fontSize: 14,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },
    header: {
       
        marginLeft: -20,
        width: 20,
    }
    
})

export default styles