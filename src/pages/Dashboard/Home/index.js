import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import styles from './styles';
import { GetBankRequest } from '../../../store/modules/bank/actions';
import { GetOperationsRequest } from '../../../store/modules/operations/actions';

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.bank.data);
  const dataOperations = useSelector((state) => state.operations.data);

  useEffect(() => {
    dispatch(GetBankRequest());
    dispatch(GetOperationsRequest());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.viewScroll}
      >
        <View style={styles.viewCards}>
          <View style={styles.viewCardHeader}>
            <Text style={styles.viewCardHeaderTitle}>Bancos Cadastrados</Text>
            <Text style={styles.viewCardHeaderButton}>Adicionar</Text>
          </View>

          <View style={styles.viewCardContent}>
            {data.map((item) => (
              <View style={styles.viewContent}>
                <View style={styles.viewCardContentItem}>
                  <View
                    style={[
                      styles.active,
                      { backgroundColor: item.active ? 'green' : 'red ' },
                    ]}
                  />
                  <View style={styles.viewCardData}>
                    <View style={styles.viewCardDataHeader}>
                      <Text style={styles.viewCardDataText}>{item.name}</Text>
                    </View>
                    <View style={styles.viewValueCard}>
                      <Text style={styles.viewCardDataText}>
                        {item.overdraft}
                      </Text>
                      <Text style={styles.textValueCardDate}>
                        {format(new Date(item.created_at), 'dd/MM')}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.textValueCardDate} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.viewCards}>
          <View style={styles.viewCardHeader}>
            <Text style={styles.viewCardHeaderTitle}>
              Listagem de Operações
            </Text>
            <Text style={styles.viewCardHeaderButton}>Adicionar</Text>
          </View>
          <View style={styles.viewCardContentTwo}>
            {dataOperations.map((item) => (
              <View style={styles.viewContent}>
                <View style={styles.viewCardContentItem}>
                  {/* <View style={styles.viewTypeImageCard}>
                    <Icons name="bank" size={20} color={colors.blue} />
                  </View> */}
                  <View style={styles.viewCardData}>
                    <View style={styles.viewCardDataHeader}>
                      <Text style={styles.viewCardDataText}>
                        {item.description}
                      </Text>
                      <Text style={styles.textNumberCard}>
                        {format(new Date(item.created_at), 'dd/MM/yyyy')}
                      </Text>
                    </View>
                    <View style={styles.viewValueCard}>
                      <Text style={styles.viewCardDataText}>
                        R$ {item.value}
                      </Text>
                      <Text style={styles.textValueCardDate}>{item.type}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.viewLine} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
