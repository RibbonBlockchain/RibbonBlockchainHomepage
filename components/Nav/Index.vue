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
        <ul class="navbar-nav ml-auto" id="mainNav">
          <li class="nav-item nav-link active">
            <a href="#about" v-scroll-to="{offset:-200, el:'#about'}">About</a>
          </li>
          <li class="nav-item nav-link">
            <a href="#ecosystem" v-scroll-to="'#ecosystem'">Users</a>
          </li>
          <li class="nav-item nav-link">
            <a href="#incentives" v-scroll-to="'#incentives'">Incentives</a>
          </li>
          <li class="nav-item nav-link">
            <a href="#services" v-scroll-to="'#services'">Services</a>
          </li>
          <li class="nav-item nav-link">
            <a href="#technology" v-scroll-to="{offset:-50, el:'#technology'}">Technology</a>
          </li>

          <li class="nav-item nav-link">
            <a href="#roadmap" v-scroll-to="'#roadmap'">Roadmap</a>
          </li>

          <li class="nav-item nav-link">
            <a href="#team" v-scroll-to="{offset:-75, el:'#team'}">Team</a>
          </li>
          <li class="nav-item nav-link">
            <a href="#faq" v-scroll-to="'#faq'">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    var sections = $("section"),
      nav = $("#mainNav"),
      nav_height = nav.outerHeight();
    $(window).on("scroll", function() {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find("li").removeClass("active");
          sections.removeClass("active");
          // $(this).addClass("active");
          nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent("li")
            .addClass("active");
        }
      });
    });
  }
};
</script>

<style>
li.active a {
  border-bottom: 3px solid #ed1e78;
  transition: 0.3s ease-in-out;
}
</style>