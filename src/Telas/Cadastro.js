import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

import Logo from "../componentes/Logo";
import MeuBotao2 from "../componentes/MeuBotao2";
import { useState } from "react";

export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confimarSenha, setConfirmarSenha] = useState('');
  const [VerSenha, setVerSenha] = useState(true);

  return (
    <View style={styles.container}>

      <Logo />

      <TextInput
        style={[styles.textInput, { marginTop: 12 }]}
        placeholder="Your email"
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

      <TextInput
        secureTextEntry={VerSenha}
        style={[styles.textInput, { marginTop: 12 }]}
        placeholder="Confirm your password"
        placeholderTextColor="#A8A8A8"
        onChangeText={(text) => setConfirmarSenha(text)}
      />

      <TouchableOpacity
        onPress={() => setVerSenha(!VerSenha)}
      >
        <Text style={styles.textoMostrarSenha}>
          {VerSenha ? 'Show' : 'Hide'}
        </Text>
      </TouchableOpacity>

      <MeuBotao2
        email={email}
        senha={senha}
        confimarSenha={confimarSenha}
      />

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

});