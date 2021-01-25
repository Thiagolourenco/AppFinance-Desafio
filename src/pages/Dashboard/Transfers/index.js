import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

export default function Transfers() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Transferência</Text>

        <View style={styles.viewCard}>
          <Text style={styles.viewCardText}>Dados Conta 1</Text>

          <TextInput placeholder="Banco" style={styles.input} />
          <TextInput placeholder="Valor Tranferencia" style={styles.input} />
          <TextInput placeholder="Conta Báncaria" style={styles.input} />
        </View>

        <View style={styles.viewCard}>
          <Text style={styles.viewCardText}>Dados Conta 2 - (Destino)</Text>

          <TextInput placeholder="Banco" style={styles.input} />
          <TextInput placeholder="Conta Báncaria" style={styles.input} />
        </View>

        <RectButton style={styles.buttonTransfers}>
          <Text style={styles.buttonTransfersText}>Transferir</Text>
        </RectButton>
      </ScrollView>
    </View>
  );
}
