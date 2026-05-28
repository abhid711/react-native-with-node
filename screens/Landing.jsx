import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 
  StatusBar,
} from 'react-native'
import {
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
const Landing = () => {
     const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0F1A" />

      {/* ── Top Badge ── */}
      <View style={styles.topSection}>
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>WELCOME</Text>
        </View>
      </View>

      {/* ── Center Content ── */}
      <View style={styles.centerSection}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoEmoji}>+</Text>
        </View>
        <Text style={styles.appName}>One Plus+</Text>
        <Text style={styles.tagline}>
          Build something amazing{'\n'}every single day
        </Text>
      </View>

      {/* ── Bottom Buttons ── */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.btnPrimary}
          activeOpacity={0.85}
         onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.btnPrimaryText}>Create Account →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSecondary}
          activeOpacity={0.85}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnSecondaryText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms</Text>
          {' '}&{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>

    </SafeAreaView>
  )
}

export default Landing

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0F1A',
    paddingHorizontal: 24,
  },
  topSection: {
    paddingTop: 20,
    alignItems: 'flex-start',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(99,102,241,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(99,102,241,0.3)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    gap: 8,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#818CF8',
  },
  badgeText: {
    color: '#818CF8',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: 'rgba(99,102,241,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(99,102,241,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoEmoji: {
    fontSize: 40,
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: '#F1F5F9',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  tagline: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 26,
  },
  bottomSection: {
    paddingBottom: 32,
  },
  btnPrimary: {
    backgroundColor: '#6366F1',
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  btnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2D2D4E',
    marginBottom: 24,
  },
  btnSecondaryText: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  termsLink: {
    color: '#818CF8',
    fontWeight: '600',
  },
})