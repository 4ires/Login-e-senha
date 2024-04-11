import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';


export default function Login() {
  return (

    //div principal
    <View style={styles.imagemBody}>
      {/*imagem logo senai*/}
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')}/>

      {/*início do formulário*/}
      <View style={styles.form} >

        {/*texto login*/}
        <Text style={styles.text}>LOGIN:</Text>
        
        {/*input login*/}
        <TextInput placeholder='Insira seu CPF' style={styles.input}/>

        {/*texto da senha*/}
        <Text style={styles.text}>SENHA:</Text>

        {/*input senha*/}
        <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input}/>
      <View style={styles.subBtn}></View>
      <TouchableOpacity><Link href={"cadastro"} style={styles.subBtn1}>Cadastrar</Link></TouchableOpacity>
      <TouchableOpacity><Link href={"senha"} style={styles.subBtn1}>Esqueci a senha</Link></TouchableOpacity>
    </View>
    <View style={styles.formbtn}>
      <Link href={"home"} style={styles.btn}>ENTRAR</Link>
    </View>
    </View>
  );
}
