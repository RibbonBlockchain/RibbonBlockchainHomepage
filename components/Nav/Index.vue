<template>
  <nav class="navbar navbar-expand-lg navbar-transparent fixed-top center-brand static-nav">
    <div class="container">
      <div class="navbar-translate" style="height:60px">
        <a class="navbar-brand" v-scroll-to="'#top'">
          <img src="img/logo.png" style="height:50px" alt="logo" class="logo-default" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="xeronav" style="padding-top:10px">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="{offset:-200, el:'#about'}">About</a>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="'#ecosystem'">Users</a>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="'#incentives'">Incentives</a>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="'#services'">Services</a>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="{offset:-100, el:'#technology'}">Technology</a>
            </div>
          </li>

          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="'#roadmap'">Roadmap</a>
            </div>
          </li>

          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="{offset:-100, el:'#team'}">Team</a>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <a v-scroll-to="'#faq'">FAQ</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted: {
    
  }
};
</script>

<style scoped>
</style>