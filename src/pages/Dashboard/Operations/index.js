import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import { colors } from '../../../constants/colors';
import { GetBankRequest } from '../../../store/modules/bank/actions';
import {
  CreateOperationsRequest,
  closeModal,
} from '../../../store/modules/operations/actions';
import { DetailsOperations } from '../components';
// import api from '../../../services/api';

export default function Operations() {
  // eslint-disable-next-line no-unused-vars
  const [selectBank, setSelectBank] = useState(null);
  const [description, setDescription] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('');

  const dispatch = useDispatch();

  const data = useSelector((state) => state.bank.data);
  const detailsOperations = useSelector(
    (state) => state.operations.detailsOperations
  );
  const loading = useSelector((state) => state.operations.loadingCreate);

  useEffect(() => {
    dispatch(GetBankRequest());
  }, []);

  const dataSelectBank = data.map((item) => ({
    label: item.name,
    value: {
      name: item.name,
      id: item.id,
    },
  }));

  async function handleAddOperation() {
    const obj = {
      description,
      value: valor,
      type: tipo,
      bank: selectBank,
    };

    dispatch(CreateOperationsRequest(obj));

    setDescription('');
    setValor('');
    setSelectBank(null);
    setTipo('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Operação</Text>

      <View style={styles.viewInput}>
        <Text style={styles.textViewInput}> Descrição da Operação</Text>
        <TextInput
          placeholder="Descrição"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.textViewInput}> Valor</Text>
        <TextInput
          placeholder="valor"
          style={styles.input}
          value={valor}
          onChangeText={setValor}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.textViewInput}> Tipo (INCOMING OU OUTCOMING )</Text>
        <TextInput
          placeholder="tipo"
          style={styles.input}
          value={tipo}
          onChangeText={setTipo}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.textViewInput}>
          Qual Banco deve ser Feita a operação
        </Text>

        <RNPickerSelect
          onValueChange={(value) => setSelectBank(value)}
          items={dataSelectBank}
          useNativeAndroidPickerStyle={false}
          // eslint-disable-next-line no-use-before-define
          style={pickerSelect}
        />
      </View>

      <RectButton style={styles.buttonCreate} onPress={handleAddOperation}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={styles.buttonCreateText}>Adicionar Operação</Text>
        )}
      </RectButton>

      <DetailsOperations
        visible={detailsOperations}
        onRequestClose={() => dispatch(closeModal())}
      />
    </View>
  );
}

const pickerSelect = StyleSheet.create({
  inputIOS: {
    height: 45,
    width: '90%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignSelf: 'center',
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    // marginTop: 15,
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    // border: 0.5,
    borderWidth: 0.2,
    borderColor: colors.dark,
    color: colors.dark,
    marginLeft: 10,
  },
  inputAndroid: {
    height: 45,
    width: '90%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignSelf: 'center',
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    // marginTop: 15,
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    // border: 0.5,
    borderWidth: 0.2,
    borderColor: colors.dark,
    color: colors.dark,
    marginLeft: 10,
  },
});
