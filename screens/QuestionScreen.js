import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, Checkbox, Button } from 'react-native-paper'

const questions = [
  {
    id: 1,
    text: 'O terreno parece está abandonado?',
    choices: [
      { id: 1, text: 'Sim' },
      { id: 2, text: 'Não' }
    ]
  },
  {
    id: 2,
    text: 'Você considera que a vegetação está em bom estado?',
    choices: [
      { id: 1, text: 'Sim, e aparenta estar bem cuidada.' },
      { id: 2, text: 'Sim, entrentanto ela não parece receber manutençã0' },
      { id: 3, text: 'Não, a vegetação está em péssimo estado.' },
      { id: 4, text: 'Não consigo identificar' }
    ]
  }
]

const styles = {
  container: {
    margin: 20
  },
  question: {
    marginBottom: 10
  },
  choice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  }
}

export const QuestionScreen = () => {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState({})

  const currentQuestion = questions[current]

  const onBack = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  const onNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
    }
  }

  return (
  <View style={styles.container}>
    <View>
       <Button mode="text" onPress={onBack}> Back </Button>
    </View>
    <Text>{currentQuestion.text}</Text>
    <View>
      {currentQuestion.choices.map((choice) => (
        <View key={choice.id} style={styles.choice}>
          <Checkbox
            status={selected[currentQuestion.id] === choice.id ? 'checked' : 'unchecked'}
            onPress={() =>
              setSelected((prevSelected) => ({
                ...prevSelected,
                [currentQuestion.id]: choice.id
              }))
            }
          />
          <Text>{choice.text}</Text>
        </View>
      ))}
    </View>
    <Button mode="contained" onPress={onNext}>Next</Button>
  </View>
  )
}

export default QuestionScreen
