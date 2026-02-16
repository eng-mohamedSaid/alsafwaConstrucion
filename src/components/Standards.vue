<template>
  <div class="standards-section">
    <h1 class="main-title add-animation" animation-class="fade-in">
      {{ $t("STANDARDS") }}
    </h1>

    <div class="standards-container">
      <!-- Safety Item -->
      <ContentCard
        :image-src="safetyImage"
        image-alt="Safety Standards"
        :title="$t('PROUD_TITLE_1')"
        :description="$t('PROUD_DESC_1')"
        :is-full-width="true"
      />

      <!-- Quality Item -->
      <ContentCard
        :image-src="qualityImage"
        image-alt="Quality Standards"
        :title="$t('PROUD_TITLE_2')"
        :description="$t('PROUD_DESC_2')"
        :is-reverse="true"
        :is-full-width="true"
      />
    </div>
  </div>
</template>

<script setup>
import safetyImage from "../assets/images/proud1.webp";
import qualityImage from "../assets/images/proud2.webp";
import ContentCard from "./ui/ContentCard.vue";
</script>

<style scoped>
.standards-section {
  padding: 4rem 2rem;
  background-color: var(--color-white);
  overflow: hidden;
}

.main-title {
  font-size: 2.5rem;
  color: var(--color-dark);
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

.standards-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
