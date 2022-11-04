import React,{ useState,useEffect } from 'react'
import { View,Text, Button } from 'react-native'
import store from '../../redux/Store'

const Redux = () => {
    const [text,setText] = useState(store.getState().value);
    useEffect(() => {
        store.subscribe(() => setText(store.getState().value))
    },[store.getState().value])

  return (
    <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
        <Text style={{ textAlign:'center' }}>
        {text}
        </Text>
        <Button title="Increment" style={{ padding:5 }} onPress={() => store.dispatch({type: 'counter/incremented' })}/>
        <Button title="Decrement" style={{ padding:5 }} onPress={() => store.dispatch({ type: 'counter/decremented' })}/>
    </View>
  )
}

export default Redux