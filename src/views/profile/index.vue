<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <user-card :user="userInfo" />
      </el-col>

      <el-col :span="18" :xs="24">
        <el-card>
          <el-tabs v-model="activeTab">
            <el-tab-pane label="活动" name="activity">
              <activity />
            </el-tab-pane>
            <el-tab-pane label="时间线" name="timeline">
              <timeline />
            </el-tab-pane>
            <el-tab-pane label="个人信息" name="account">
              <account :user-info="userInfo" />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account },
  data() {
    return {
      user: {},
      activeTab: 'account'
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {
  },
  methods: {
  }
}
</script>
