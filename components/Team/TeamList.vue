<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="member in members" :key="member">
        <team-member :member="member" />
      </div>
    </div>
  </div>
</template>
<script>
import { List } from "./TeamMembers";
import TeamMember from "./TeamMember.vue";
export default {
  data() {
    return {
      members: List
    };
  },
  components: {
    TeamMember
  }
};
</script>