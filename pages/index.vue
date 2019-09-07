<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <UserFlowSection />
    <BusinessMeasureSection />
    <TechnologySection />
    <TimelineSection />
    <TeamSection />
    <AdvisorySection />
    <PartnersSection />
    <FAQSection />
  </div>
</template>

<script>
import HeroSection from "~/sections/Home/Hero/index.vue";
import AboutSection from "~/sections/Home/About/index.vue";
import ServiceSection from "~/sections/Home/Service/index.vue";
import UserFlowSection from "~/sections/Home/UserFlow/index.vue";
import BusinessMeasureSection from "~/sections/Home/BusinessMeasure/index.vue";
import TechnologySection from "~/sections/Home/Technology/index.vue";
import TimelineSection from "~/sections/Home/Timeline/index.vue";
import TeamSection from "~/sections/Home/Team/index.vue";
import AdvisorySection from "~/sections/Home/Advisory/index.vue";
import PartnersSection from "~/sections/Home/Partners/index.vue";
import FAQSection from "~/sections/Home/FAQs/index.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    ServiceSection,
    UserFlowSection,
    BusinessMeasureSection,
    TimelineSection,
    TeamSection,
    AdvisorySection,
    PartnersSection,
    FAQSection,
    TechnologySection
  }
};
</script>

<style>
.alternativeBackground {
  background: #F4F6FA;
}
</style>