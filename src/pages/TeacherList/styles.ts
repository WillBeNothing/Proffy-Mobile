import {StyleSheet}  from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7"
    },
    list: {
        marginTop: -40,
       

    },
    searchForm: {
        marginBottom:24,

    },
    label: {
        color:'#d4c2ff',
        fontFamily: 'Poppins_400Regular'

    },
    input: {
        height: 54,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:16 ,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 16,

    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    inputBlock: {
        width: "48%"
    },
    submitButton: {
        backgroundColor: '#04d361' ,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
    },
    submitButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16,

    },
    teacherItem: {
        paddingHorizontal:16,
        paddingBottom: 24,
    },
    apresentation: {
        color: "#5a5070",
        marginTop: 40,
        flexDirection: 'row',
        flex: 1,
        fontFamily: "Poppins_400Regular",
        fontSize: 18,
        maxWidth: 250,
        



    },

    apresentationBlock: {
    justifyContent: "center",
    alignItems: 'center',
    }
})

export default styles