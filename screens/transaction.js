import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
export default class TransactionScreen extends React.Component{
render(){
return(
<View style={styles.container}>
<Text style={styles.text}>
TransactionScreen 
</Text>
</View>
)
}
}

const styles=StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#5653t4'
},
text:{
color:'#fff',
fontSize:30
}
})