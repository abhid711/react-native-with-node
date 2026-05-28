
import React from 'react'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons'

const SocialButton = () => {

  return (

    <View style={styles.socialRow}>

      {/* Google Button */}

      <TouchableOpacity
        style={styles.socialBtn}
        activeOpacity={0.8}
      >

        <FontAwesome
          name="google"
          size={18}
          color="#94A3B8"
        />

        <Text style={styles.socialBtnText}>
          Google
        </Text>

      </TouchableOpacity>

      {/* Apple Button */}

      <TouchableOpacity
        style={styles.socialBtn}
        activeOpacity={0.8}
      >

        <Ionicons
          name="logo-apple"
          size={20}
          color="#94A3B8"
        />

        <Text style={styles.socialBtnText}>
          Apple
        </Text>

      </TouchableOpacity>

    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({

  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },

  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1A1A2E',

    borderWidth: 1,
    borderColor: '#2D2D4E',

    borderRadius: 12,

    paddingVertical: 13,

    gap: 8,
  },

  socialBtnText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '500',
  },

})
