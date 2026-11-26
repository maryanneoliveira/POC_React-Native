import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Logo from '../componentes/Logo';
import MeuBotao from '../componentes/MeuBotao';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [VerSenha, setVerSenha] = useState(true);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Logo />

      <TextInput
        style={[styles.textInput, { marginTop: 12 }]}
        placeholder="Phone number, username or email"
        placeholderTextColor="#A8A8A8"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        secureTextEntry={VerSenha}
        style={[styles.textInput, { marginTop: 12 }]}
        placeholder="Password"
        placeholderTextColor="#A8A8A8"
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity
        onPress={() => setVerSenha(!VerSenha)}
      >
        <Text style={styles.textoMostrarSenha}>
          Show
        </Text>
      </TouchableOpacity>

      <MeuBotao email={email} senha={senha} />

      <TouchableOpacity
        onPress={() => navigation.replace('telaRecuperar')}
      >
        <Text style={styles.textoRecuperarSenha}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('telaCadastro')}
      >
        <Text style={styles.textoNaoTemConta}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>

      <View style={styles.linha} />

      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    width: '70%',
    borderWidth: 0.5,
    borderColor: '#363636',
    height: 45,
    padding: 6,
    borderRadius: 4,
    backgroundColor: '#262626',
    color: '#FFFFFF',
  },

  textoMostrarSenha: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2584F4',
    marginTop: 12,
    marginLeft: 255,
  },

  textoNaoTemConta: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2584F4',
    marginTop: 130,
    alignItems: 'center',
  },

  linha: {
    backgroundColor: '#363636',
    width: 340,
    height: 0.5,
    marginTop: -25,
  },

  textoRecuperarSenha: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2584F4',
    marginTop: -80,
  },

});