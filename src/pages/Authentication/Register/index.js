import React, { useState, useRef } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { signUpRequest } from '../../../store/modules/auth/actions';
import { colors } from '../../../constants/colors';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setPassword] = useState('');
  const [password, setPassowrd] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loading = useSelector((state) => state.auth.loadingSignUp);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleRegister() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Usuário</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={name}
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setPassword}
        autoCapitalize="none"
        keyboardType="email-address"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        placeholder="******"
        style={styles.input}
        value={password}
        onChangeText={setPassowrd}
        secureTextEntry
        onSubmitEditing={handleRegister}
      />

      <RectButton style={styles.buttonCreate} onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator color={colors.white} size="small" />
        ) : (
          <Text style={styles.buttonCreateText}>Cadastrar</Text>
        )}
      </RectButton>
      <RectButton
        style={styles.buttonLogin}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonLoginText}>Voltar login</Text>
      </RectButton>
    </View>
  );
}
