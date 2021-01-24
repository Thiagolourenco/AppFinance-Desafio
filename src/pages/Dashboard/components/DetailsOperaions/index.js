/* eslint-disable no-nested-ternary */
import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function DetailsOperations({ visible, onRequestClose }) {
  const info = useSelector((state) => state.operations.operation);

  return (
    <Modal
      visible={visible}
      onRequestClose={() => onRequestClose()}
      animationType="slide"
      transparent
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Detalhes da Operação </Text>
            <TouchableOpacity onPress={onRequestClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.contentInfo}>
              <Text style={styles.label}>Data Da Operação</Text>
              <Text style={styles.labelInfo}>
                {info === null
                  ? ''
                  : format(new Date(info.created_at), 'dd/MM/yyyy')}
              </Text>
            </View>

            <View style={styles.contentInfo}>
              <Text style={styles.label}>Valor da Operação</Text>
              <Text style={styles.labelInfo}>
                {info === null ? '' : info.value}
              </Text>
            </View>

            <View style={styles.contentInfo}>
              <Text style={styles.label}>Tipo de Operação </Text>
              <Text style={styles.labelInfo}>
                {info === null
                  ? ''
                  : info.type === 'outcoming'
                  ? 'Saída'
                  : 'Entrada'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
