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
        <Text style={styles.text}>USUÁRIO:</Text>
        
        {/*input login*/}
        <TextInput placeholder='Insira seu Usuário' style={styles.input}/>

        {/*texto da senha*/}
        <Text style={styles.text}>SENHA:</Text>

        {/*input senha*/}
        <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input}/>
    </View>
    <View style={styles.formbtn}>
      <Link href={"cadastro"} style={styles.btn}>ENTRAR</Link>
    </View>
    </View>
  );
}