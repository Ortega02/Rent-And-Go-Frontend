import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ value, setValue, placeholder, secureTextEntry, icononame, iconpassword, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon name={icononame} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry} />
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={iconpassword}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: 'gray',
    paddingVertical: 12,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: 'gray',
  },
});

export default Input;