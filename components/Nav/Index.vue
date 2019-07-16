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
            <a class="nav-link" href="#">Home</a>
          </li>

          <li class="nav-item drop_menu">
            <a class="nav-link" href="#">
              Services
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="service-#">Service Details</a>
              </li>
            </ul>
          </li>
          <li class="nav-item drop_menu">
            <a class="nav-link" href="#">
              About Us
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="case-#">Key Markets</a>
              </li>
              <li>
                <a href="services.htm">Our Services</a>
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
            <a class="nav-link" href="#">Media</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
