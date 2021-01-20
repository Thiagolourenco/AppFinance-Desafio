import React, { useRef, useState } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import { colors } from "../../constants/colors";
import logo from "../../assets/logo.jpg";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const passwordRef = useRef(null);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />

      <View style={{ marginTop: 20 }}>
        <View style={styles.viewInput}>
          <TextInput
            placeholder="Edentificação"
            placeholderTextColor={colors.dark}
            secureTextEntry
            values={email}
            // onBlur={handleBlur("name")}
            onChangeText={setEmail}
            autoCompleteType="email"
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

      <RectButton style={styles.buttonAccount} onPress={() => {}}>
        <Text style={styles.buttonAccountText}>Login</Text>
      </RectButton>
      <RectButton style={styles.buttonLogin} onPress={() => {}}>
        <Text style={styles.buttonLoginText}>Cadastrar</Text>
      </RectButton>
    </View>
  );
}
