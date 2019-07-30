<template>
  <section class="meet_our_team" id="team">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="title text-center">
            <h3>Meet Our Team</h3>
            <p>
              Ribbon has a experienced, interdisciplinary team who is perfectly positioned to realise the
              potential of healthcare incentives.
            </p>
          </div>
        </div>
        <div class="w-100"></div>
        <team-list />
      </div>
    </div>
    <div class="meet_elem">
      <img src="img/shape/img1.png" alt class="shape-one" />
      <img src="img/shape/img2.png" alt class="shape-two" />
      <img src="img/shape/img3.png" alt class="shape-three" />
      <img src="img/shape/img4.png" alt class="shape-four" />
      <img src="img/shape/img5.png" alt class="shape-five" />
    </div>
  </section>
</template>
<script>
import TeamList from "~/components/Team/TeamList.vue";
export default {
  components: {
    TeamList
  }
};
</script>