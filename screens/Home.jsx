import React from 'react'
import {
  View,
  Text,
  StyleSheet,

  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.safeArea}>
    
      <StatusBar barStyle="light-content" backgroundColor="#0F0F1A" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* ── Header ── */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.username}>Abhi Dubey</Text>
          </View>
          <TouchableOpacity style={styles.avatarBtn}>
            <Text style={styles.avatarText}>AD</Text>
          </TouchableOpacity>
        </View>

        {/* ── Banner Card ── */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerLeft}>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>PRO PLAN</Text>
            </View>
            <Text style={styles.bannerTitle}>Welcome back!</Text>
            <Text style={styles.bannerSubtitle}>
              Continue building{'\n'}something amazing.
            </Text>
          </View>
          <Text style={styles.bannerEmoji}>🚀</Text>
        </View>

        {/* ── Stats Row ── */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="checkmark-circle-outline" size={22} color="#818CF8" />
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="time-outline" size={22} color="#818CF8" />
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="star-outline" size={22} color="#818CF8" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>

        {/* ── Quick Actions ── */}
        <Text style={styles.sectionTitle}>Quick <Actionss></Actionss></Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="add-circle-outline" size={24} color="#818CF8" />
            </View>
            <Text style={styles.actionText}>New Task</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="people-outline" size={24} color="#818CF8" />
            </View>
            <Text style={styles.actionText}>Team</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="bar-chart-outline" size={24} color="#818CF8" />
            </View>
            <Text style={styles.actionText}>Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="settings-outline" size={24} color="#818CF8" />
            </View>
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* ── Recent Activity ── */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>

          {[
            { icon: 'checkmark-done-outline', title: 'Task completed',      time: '2 min ago',  color: '#4ADE80' },
            { icon: 'create-outline',         title: 'Profile updated',     time: '1 hour ago', color: '#818CF8' },
            { icon: 'notifications-outline',  title: 'New notification',    time: '3 hours ago',color: '#FACC15' },
            { icon: 'cloud-upload-outline',   title: 'File uploaded',       time: 'Yesterday',  color: '#38BDF8' },
          ].map((item, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={[styles.activityIconBox, { backgroundColor: `${item.color}18` }]}>
                <Ionicons name={item.icon} size={18} color={item.color} />
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>{item.title}</Text>
                <Text style={styles.activityTime}>{item.time}</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={16} color="#2D2D4E" />
            </View>
          ))}

        </View>

      </ScrollView>
    </SafeAreaView>
 
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 4,
  },
  username: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F1F5F9',
  },
  avatarBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(99,102,241,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(99,102,241,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#818CF8',
    fontSize: 13,
    fontWeight: '700',
  },

  // Banner
  bannerCard: {
    backgroundColor: 'rgba(99,102,241,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(99,102,241,0.3)',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  bannerLeft: {
    flex: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(99,102,241,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(99,102,241,0.4)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 12,
    gap: 6,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#818CF8',
  },
  badgeText: {
    color: '#818CF8',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 6,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },
  bannerEmoji: {
    fontSize: 52,
    marginLeft: 16,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1E1E30',
    borderWidth: 1,
    borderColor: '#2D2D4E',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 6,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F1F5F9',
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },

  // Section Title
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 14,
  },

  // Actions Grid
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },
  actionCard: {
    width: '47%',
    backgroundColor: '#1E1E30',
    borderWidth: 1,
    borderColor: '#2D2D4E',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 10,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(99,102,241,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(99,102,241,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94A3B8',
  },

  // Activity
  activityList: {
    backgroundColor: '#1E1E30',
    borderWidth: 1,
    borderColor: '#2D2D4E',
    borderRadius: 16,
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D4E',
    gap: 14,
  },
  activityIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F1F5F9',
    marginBottom: 3,
  },
  activityTime: {
    fontSize: 12,
    color: '#64748B',
  },
})