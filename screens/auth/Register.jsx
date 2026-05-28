import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
 
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import InputCont from '../../components/InputCont';
import SocialButton from '../../components/SocialButton';
const Register = () => {
 const navigation = useNavigation();
  
  const [fullName, setFullName] = useState('')
  const [email, setEmail]                       = useState('')
  const [password, setPassword]                 = useState('')
  const [confirmPassword, setConfirmPassword]   = useState('')
  const [showPassword, setShowPassword]         = useState(false)
  const [showConfirm, setShowConfirm]           = useState(false)
  const [loading, setLoading]                   = useState(false)

  const handleRegister = async () => {
    setLoading(true)
    alert('register done')
navigation.navigate('Home')
    try {
      // TODO: Connect your API here
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Registered:', { fullName, email, password })
      // navigation.navigate('Home')
    } catch (error) {
      console.error('Register error:', error)
    } finally {
      setLoading(false)
    }
  }
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* ── Header ── */}
          <View style={styles.header}>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>CREATE ACCOUNT</Text>
            </View>
            <Text style={styles.title}>Join us today 👋</Text>
            <Text style={styles.subtitle}>Fill in the details below to get started</Text>
          </View>

          {/* ── Form ── */}
          <View>
            <InputCont label={'FULL NAME'} setValue={setFullName}placeholder={"e.g. Abhi Sharma"} />
            <InputCont label={'Email Address'} setValue={setEmail}placeholder={"you@example.com"}/>
          <InputCont label={'Password'} setValue={setPassword}placeholder="Min. 6 characters" secureTextEntry={true}/ >
          <InputCont label={'Confirm Password'} setValue={setConfirmPassword}placeholder={"Re-enter your password"} secureTextEntry={true}/>

              {/* ── Register Button ────────────────────────────────────── */}
            <TouchableOpacity
              style={[styles.btn, loading && styles.btnDisabled]}
              onPress={handleRegister}
              disabled={loading}
              activeOpacity={0.85}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.btnText}>Create Account →</Text>
              )}
            </TouchableOpacity>
 

            {/* ── Divider ── */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or sign up with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* ── Social Buttons ── */}
            <SocialButton/>

            {/* ── Footer ── */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
                <Text style={styles.footerLink}>Sign In</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 20,
    marginBottom: 32,
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
    marginBottom: 16,
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },


  eyeBtn: {
    paddingLeft: 10,
    paddingVertical: 4,
  },
  eyeIcon: {
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#6366F1',
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  btnDisabled: {
    opacity: 0.6,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#1E2030',
  },
  dividerText: {
    fontSize: 12,
    color: '#475569',
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#475569',
  },
  footerLink: {
    fontSize: 14,
    color: '#818CF8',
    fontWeight: '600',
  },
})