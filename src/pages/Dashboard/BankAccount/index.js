import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { GetBankRequest } from '../../../store/modules/bank/actions';

export default function BankAccount() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.bank.data);

  useEffect(() => {
    dispatch(GetBankRequest());
  }, []);

  const totalCount = data.reduce((total, item) => total + item.overdraft, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados das Contas</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>R$ {parseFloat(totalCount)}</Text>
      </View>

      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.listCardText}>{item.name}</Text>
              <Text style={styles.listCardText}>R$ {item.overdraft}</Text>
            </View>
            <View
              style={[
                styles.active,
                { backgroundColor: item.active ? 'green' : 'red' },
              ]}
            />
          </View>
        )}
      />
    </View>
  );
}
