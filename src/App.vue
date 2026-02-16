<template>
  <loader v-if="isLoading"></loader>
  <div v-else>
    <navbar></navbar>
    <hero></hero>
    <about-us></about-us>
    <companies></companies>
    <feature1></feature1>
    <feature2></feature2>
    <feature3></feature3>
    <modals></modals>
    <standards></standards>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Loader from "./components/ui/Loader.vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import AboutUs from "./components/AboutUs.vue";
import Companies from "./components/Companies.vue";
import Feature1 from "./components/Feature1.vue";
import Feature2 from "./components/Feature2.vue";
import Feature3 from "./components/Feature3.vue";
import Modals from "./components/Modals.vue";
import Footer from "./components/Footer.vue";
import Standards from "./components/Standards.vue";

import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import { useHead } from "@vueuse/head";
import { computed } from "vue";

const i18n = useI18n();
const isLoading = ref(true);

useHead({
  title: computed(() => i18n.t("TITLE")),
  meta: [
    {
      name: "description",
      content: computed(() => i18n.t("ABOUT_US")),
    },
  ],
});

onMounted(() => {
  document.body.dir = i18n.locale.value === "ar" ? "rtl" : "ltr";
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);

  setTimeout(() => {
    // intersection observer
    const animatedElements = document.querySelectorAll(".add-animation");
    const options = {};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animationClass = entry.target.getAttribute("animation-class");
        const animationClassArr = animationClass.split(" ");

        if (entry.isIntersecting) {
          animationClassArr.forEach((c) => {
            entry.target.classList.add(c);
          });
        } else {
          animationClassArr.forEach((c) => {
            entry.target.classList.remove(c);
          });
        }
      });
    }, options);
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }, 2000);
});
</script>

<style scoped></style>
