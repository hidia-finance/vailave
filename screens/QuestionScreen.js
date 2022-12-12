import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, Checkbox, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

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
      { id: 2, text: 'Sim, entrentanto ela não parece receber manutenção.' },
      { id: 3, text: 'Não, a vegetação está em péssimo estado.' },
      { id: 4, text: 'Não consigo identificar' }
    ]
  }
]

export const QuestionScreen = () => {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState({})
  const navigation = useNavigation()

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
    <View style={styles.back}>
       <Button mode="text" icon="arrow-left" onPress={onBack}> Voltar </Button>
    </View>
    <Text style={{ fontWeight: 'bold' }}>{currentQuestion.text}</Text>
    <View style={{ marginBottom: 30 }}>
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
    { current === questions.length - 1 ? <Button mode="contained" onPress={() => navigation.navigate('success')}>Finalizar</Button> : <Button mode="contained" onPress={onNext}>Enviar</Button> }

  </View>
  )
}


const styles = {
  container: {
    margin: 20
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
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


export default QuestionScreen
