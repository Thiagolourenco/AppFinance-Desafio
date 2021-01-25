import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { CreateBankRequest } from '../../../store/modules/bank/actions';
import { colors } from '../../../constants/colors';

export default function AddBank() {
  const [name, setName] = useState('');
  const [overdraft, setOverdraft] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.bank.loadingCreate);

  function handleCreateBank() {
    dispatch(CreateBankRequest(name, overdraft));
    setName('');
    setOverdraft('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar um Novo Banco</Text>

      <View style={styles.content}>
        <View>
          <Text style={styles.labelInput}>Nome Do Banco</Text>
          <TextInput
            placeholder="Banco"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.labelInput}>Cheque Especial</Text>
          <TextInput
            placeholder="Cheque"
            style={styles.input}
            value={overdraft}
            onChangeText={setOverdraft}
            keyboardType="numeric"
          />
        </View>
      </View>

      <RectButton style={styles.buttonCreate} onPress={handleCreateBank}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={styles.buttonCreateText}>Adicionar Banco</Text>
        )}
      </RectButton>
    </View>
  );
}
