<template>
  <div class="companies-section">
    <h1 class="main-title add-animation" animation-class="fade-in">
      {{ $t("COMPANIES.TITLE") }}
    </h1>

    <div class="companies-container">
      <!-- Saudi Company -->
      <ContentCard
        :image-src="saudiLogo"
        image-alt="Al Safwa Logo"
        :title="$t('COMPANIES.SAUDI.NAME')"
        :description="$t('COMPANIES.SAUDI.DESCRIPTION')"
      />

      <!-- Egypt Company -->
      <ContentCard
        :image-src="egyptLogo"
        image-alt="Al Pharaonic Logo"
        :title="$t('COMPANIES.EGYPT.NAME')"
        :description="$t('COMPANIES.EGYPT.DESCRIPTION')"
        :is-reverse="true"
      />

      <!-- Sheikh Company -->
      <ContentCard
        :image-src="sheikhLogo"
        image-alt="El Sheikh Logo"
        :title="$t('COMPANIES.SHEIKH.NAME')"
        :description="$t('COMPANIES.SHEIKH.DESCRIPTION')"
      />
    </div>
  </div>
</template>

<script setup>
import saudiLogo from "../assets/images/elsafwa-logo.svg";
import egyptLogo from "../assets/images/feroania-logo.png";
import sheikhLogo from "../assets/images/elsheikh-logo.webp";
import ContentCard from "./ui/ContentCard.vue";
</script>

<style scoped>
.companies-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa; /* Light background */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.main-title {
  font-size: 2.5rem;
  color: var(
    --color-dark
  ); /* Assuming black/dark text variable exists or default */
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  font-weight: bold;
}

.main-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background-color: var(--color-orange);
  margin: 10px auto 0;
  border-radius: 2px;
}

.companies-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
}
</style>
