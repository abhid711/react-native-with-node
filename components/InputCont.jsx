import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputCont = ({label,setValue,placeholder,secureTextEntry}) => {
  return (
  <View style={styles.form}>

             <Text style={styles.label}>{label}</Text>
             <View style={styles.inputWrapper}>
               <TextInput
                 style={styles.input}
                 onChangeText={setValue}
                 placeholder={placeholder}
                 placeholderTextColor="#64748B"
                 autoCapitalize="words"
                 secureTextEntry={secureTextEntry}
        
               />
             </View>
             </View>
  )
}

export default InputCont

const styles = StyleSheet.create({
      form: {
    gap: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
    marginBottom: 8,
    marginTop: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E30',
    borderWidth: 1,
    borderColor: '#2D2D4E',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
    input: {
    flex: 1,
    fontSize: 15,
    color: '#E2E8F0',
    height: '100%',
  },
})