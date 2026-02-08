<template>
  <div class="about">
    <div class="about-info flex flex-col">
      <h1 class="sub-title about-title add-animation" animation-class="fade-in">{{ $t("WHO_US") }}</h1>
      <p class="description add-animation" animation-class="come-up">
        {{ $t("ABOUT_US") }}
      </p>
      <p class="description add-animation" animation-class="come-up">
        {{ $t("DESCRIPTION_1") }}
      </p>
      <p class="description add-animation" animation-class="come-up">
        {{ $t("DESCRIPTION_2") }}
      </p>

      <a class="hero-button" :href="profile" download>{{ $t("DOWNLOAD_PROFILE") }}</a>
    </div>
    <div class="about-services flex flex-col">
      <h1 class="sub-title add-animation" animation-class="fade-in">{{ $t("HERO.SERVICES") }}</h1>

      <about-card
        :icon="icon1"
        :title="$t('SERVICES.TITLE_1')"
        :description="$t('SERVICES.DESCRIPTION_1')"
      ></about-card>
      <about-card
        :icon="icon2"
        :title="$t('SERVICES.TITLE_2')"
        :description="$t('SERVICES.DESCRIPTION_2')"
      ></about-card>
      <about-card
        :icon="icon3"
        :title="$t('SERVICES.TITLE_3')"
        :description="$t('SERVICES.DESCRIPTION_3')"
      ></about-card>
    </div>
  </div>
</template>

<script setup>
import profile from "../assets/profile.pdf";
import icon1 from "../assets/images/about-icon-1.svg";
import icon2 from "../assets/images/about-icon-2.svg";
import icon3 from "../assets/images/about-icon-3.svg";

import AboutCard from "./ui/AboutCard.vue";
</script>

<style scoped>
.about {
  display: flex;
  width: 100%;
}

.about-info {
  align-items: flex-start;
  width: 100%;
  background: linear-gradient(to left, rgba(31, 31, 31, 0.85), rgba(31, 31, 31, 0.85)),
    url("../assets/images/about-background.webp");
  color: var(--color-white);
  padding: 4rem 2rem;
  gap: 0.5rem;
}
.about-title {
  position: relative;
}
[dir="rtl"] .about-title {
  padding-right: 0.8rem;
}

[dir="ltr"] .about-title {
  padding-left: 0.8rem;
}
.about-title::after {
  content: "";
  width: 5px;
  height: 120%;
  position: absolute;
  background: var(--color-orange);
  top: 50%;
  transform: translateY(-50%);
}

[dir="rtl"] .about-title::after {
  right: 0;
}

[dir="ltr"] .about-title::after {
  left: 0;
}

.description {
  /* max-width: 800px; */
}
.hero-button {
  background: var(--color-orange);
  /* padding: 1rem 2rem; */
  color: var(--color-white);
  margin-top: 1.5rem;
}
.hero-button:hover {
  background: var(--color-white);
  color: var(--color-orange);
}
.about-services {
  width: 100%;
  max-width: 650px;
  background: linear-gradient(to left, var(--color-orange), var(--color-golden));
  align-items: flex-start;
  padding: 2rem;
}

@media (max-width: 900px) {
  .about-info,
  .about-services {
    padding: 2rem 1rem;
  }
  .sub-title {
    font-weight: bold;
  }

  .about {
    flex-direction: column-reverse;
  }
  .about-services {
    max-width: 100%;
  }
}
</style>
