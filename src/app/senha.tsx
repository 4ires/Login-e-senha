import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';


export default function Cadastrar() {
  return (

    //div principal
    <View style={styles.imagemBody}>
      {/*imagem logo senai*/}
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')}/>

      {/*início do formulário*/}
      <View style={styles.form} >

        {/*texto login*/}
        <Text style={styles.text}>REDEFINIR SENHA:</Text>
        
        {/*input login*/}
        <TextInput placeholder='Digite uma nova senha' style={styles.input}/>

        {/*texto da senha*/}
        <Text style={styles.text}>CONFIRME SUA SENHA:</Text>

        {/*input senha*/}
        <TextInput secureTextEntry placeholder='Insira a nova senha' style={styles.input}/>
    </View>
    <View style={styles.formbtn}>
      <Link href={"senha"} style={styles.btn}>ENTRAR</Link>
    </View>
    </View>
  );
}