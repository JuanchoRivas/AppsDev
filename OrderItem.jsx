import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { colors } from './Global/colors';


const OrderItem = ({ item }) => {
    const total = item.items.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),0
    )

  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{new Date(item.createdAt).toLocaleString()}</Text>
        <Text style={styles.text2}>{total}</Text>
      </View>

    </View>
  )
}

export default OrderItem;

const styles = StyleSheet.create({})