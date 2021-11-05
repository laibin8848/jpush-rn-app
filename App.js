import React, { useEffect } from 'react'
import { Text } from 'react-native'
import JPush from 'jpush-react-native'

export default function App() {

  const notificationListener = result => {
    const data = {
        messageID: result.messageID,
        message: result.content
    }
    console.log('data', data)
}

  useEffect(()=> {
    JPush.init()
    JPush.addNotificationListener(notificationListener)
    JPush.setAlias({sequence: 6,alias:'1111'})
  }, [])

  return (
    <Text>xxx</Text>
  )
}