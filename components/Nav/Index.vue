<template>
  <nav class="navbar navbar-expand-lg navbar-transparent fixed-top center-brand static-nav">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="#">
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
      <div class="collapse navbar-collapse" id="xeronav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link">
              <nuxt-link to="/">Home</nuxt-link>
            </div>
          </li>

          <li class="nav-item drop_menu">
            <div class="nav-link">
              <nuxt-link to="#">
                About Us
                <i class="fas fa-caret-down"></i>
              </nuxt-link>
            </div>
            <ul>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#market">Key Markets</a>
              </li>
              <li >
                <a href="#team">Our Team</a>
              </li>
            </ul>
          </li>

          <li class="nav-item drop_menu">
            <a class="nav-link" href="#">
              How it works?
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Crowdfunding</a>
              </li>
              <li>
                <a href="#">Incentives</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
