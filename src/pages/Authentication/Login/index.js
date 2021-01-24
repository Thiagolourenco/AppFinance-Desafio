import React, { useRef, useState } from 'react';
import { View, TextInput, Image, Text, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

import styles from './styles';
import { colors } from '../../../constants/colors';
import logo from '../../../assets/logo.jpg';
import { signInRequest } from '../../../store/modules/auth/actions';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const loading = useSelector((state) => state.auth.loading);

  function handleLogin() {
    if (email !== '' && password !== '') {
      dispatch(signInRequest(email, password));
    } else {
      showMessage({
        type: 'warning',
        message: 'Todos os campos são obrigátorios.',
      });
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />

      <View style={{ marginTop: 20 }}>
        <View style={styles.viewInput}>
          <TextInput
            placeholder="Edentificação"
            placeholderTextColor={colors.dark}
            values={email}
            // onBlur={handleBlur("name")}
            onChangeText={setEmail}
            autoCompleteType="email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            ref={passwordRef}
            placeholder="******"
            placeholderTextColor={colors.dark}
            secureTextEntry
            values={password}
            // onBlur={handleBlur("name")}
            onChangeText={setPassword}
            autoCompleteType="name"
            style={styles.input}
            // onSubmitEditing={() => birthdateRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
        </View>
      </View>

      <RectButton style={styles.buttonAccount} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={styles.buttonAccountText}>Login</Text>
        )}
      </RectButton>
      <RectButton
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonLoginText}>Cadastrar</Text>
      </RectButton>
    </View>
  );
}
