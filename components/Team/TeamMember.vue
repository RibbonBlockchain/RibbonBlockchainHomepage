<template>
  <div class="teams_single_in" data-aos="fade-up" data-aos-duration="500">
    <img v-if="member.image" :src="member.image" alt="Ribbon Blockchain team member" />
    <ul class="social">
      <li v-if="member.twitter">
        <a :href="member.twitter" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li v-if="member.linkedin">
        <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li v-if="member.github">
        <a :href="member.github" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li v-if="member.gitlab">
        <a :href="member.gitlab" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-gitlab"></i>
        </a>
      </li>
    </ul>
    <div class="name">
      <h4>{{ member.name }}</h4>
      <p class="h6" style="padding-top: 5px">{{ member.role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["member"]
};
</script>