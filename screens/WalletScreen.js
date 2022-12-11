import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const WalletScreen = () => {
  // Assume that this information is fetched from a database or API
  const [balance, setBalance] = useState(1000)
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: 50,
      type: 'deposit',
      date: '2022-12-11'
    },
    {
      id: 2,
      amount: 100,
      type: 'withdrawal',
      date: '2022-12-10'
    },
    {
      id: 3,
      amount: 25,
      type: 'deposit',
      date: '2022-12-09'
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance: ${balance}</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsHeader}>Transactions:</Text>
        {transactions.map(transaction => (
          <View style={styles.transaction} key={transaction.id}>
            <Text style={styles.transactionText}>
              {transaction.type}: ${transaction.amount}
            </Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceContainer: {
    marginBottom: 20
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  transactionsContainer: {
    width: '80%'
  },
  transactionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  transactionText: {
    fontSize: 16
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray'
  }
})

export default WalletScreen
