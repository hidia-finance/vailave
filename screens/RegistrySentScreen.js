import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, IconButton, Chip, useTheme } from 'react-native-paper'

export const RegistrySentScreen = () => {
  const processData = [
    {
      date: 'January 1, 2021',
      reward: 0.1,
      status: 'pending'
    },
    {
      date: 'January 2, 2021',
      reward: 0.2,
      status: 'approved'
    },
    {
      date: 'January 3, 2021',
      reward: 0.3,
      status: 'invalidated'
    }
  ]

  const { colors } = useTheme()

  const getChipColor = (status) => {
    if (status === 'pending') {
      return colors.warning
    } else if (status === 'approved') {
      return colors.success
    } else if (status === 'invalidated') {
      return colors.danger
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {processData.map((process, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Text style={styles.date}>{process.date}</Text>
              <Text style={styles.reward}>
                Reward: {process.reward} BTC
              </Text>
                            <Chip
                style={styles.chip}
                textStyle={styles.chipText}
                mode="outlined"
                color={getChipColor(process.status)}
              >
                {process.status}
              </Chip>
              <View style={styles.actions}>
              <IconButton
                icon="camera"
                size={24}
                onPress={() => {}}
              />
              <IconButton
                icon="map-marker"
                size={24}
                onPress={() => {}}
              />
            </View>
            </Card.Content>

          </Card>
        ))}
      </ScrollView>
    </View>
  )
}

export default RegistrySentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  card: {
    marginVertical: 8
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  reward: {
    fontSize: 16
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  chipContainer: {
    alignSelf: 'flex-end'
  },
  chipText: {
    fontSize: 12
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16
  }
})
