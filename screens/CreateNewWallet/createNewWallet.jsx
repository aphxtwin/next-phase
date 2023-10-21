import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';  

export default function CreateNewWallet() {

  const [walletName, setWalletName] = useState('');

  const createWallet = () => {
    // Logic to generate and store new wallet 
  }

  return (
    <View>
      <TextInput 
        placeholder="Enter wallet name"
        value={walletName}
        onChangeText={setWalletName}
      />

      <Button 
        title="Create New Wallet"
        onPress={createWallet}
      />

    </View>
  )
}