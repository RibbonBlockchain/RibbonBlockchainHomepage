<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <UserFlowSection />
    <BusinessMeasureSection />
    <TimelineSection />
    <TeamSection />
  </div>
</template>

<script>
import Nav from "~/components/Nav/Index.vue";
import Footer from "~/components/Footer/Index.vue";

import HeroSection from "~/sections/Hero/index.vue";
import AboutSection from "~/sections/About/index.vue";
import ServiceSection from "~/sections/Service/index.vue";
import UserFlowSection from "~/sections/UserFlow/index.vue";
import BusinessMeasureSection from "~/sections/BusinessMeasure/index.vue";
import TimelineSection from "~/sections/Timeline/index.vue";
import TeamSection from "~/sections/Team/index.vue";

export default {
  components: {
    Nav,
    HeroSection,
    AboutSection,
    ServiceSection,
    UserFlowSection,
    BusinessMeasureSection,
    TimelineSection,
    TeamSection
  }
};
</script>
