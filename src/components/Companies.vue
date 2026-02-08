<template>
  <div class="companies-section">
    <h1 class="main-title add-animation" animation-class="fade-in">
      {{ $t("COMPANIES.TITLE") }}
    </h1>

    <div class="companies-container">
      <!-- Saudi Company -->
      <div class="company-card add-animation" animation-class="come-up">
        <div class="logo-wrapper">
          <img :src="saudiLogo" alt="Al Safwa Logo" class="company-logo" />
        </div>
        <div class="company-content">
          <h2 class="company-name">{{ $t("COMPANIES.SAUDI.NAME") }}</h2>
          <p class="company-desc">{{ $t("COMPANIES.SAUDI.DESCRIPTION") }}</p>
        </div>
      </div>

      <!-- Egypt Company -->
      <div class="company-card add-animation" animation-class="come-up">
        <div class="logo-wrapper">
          <img :src="egyptLogo" alt="Al Pharaonic Logo" class="company-logo" />
        </div>
        <div class="company-content">
          <h2 class="company-name">{{ $t("COMPANIES.EGYPT.NAME") }}</h2>
          <p class="company-desc">{{ $t("COMPANIES.EGYPT.DESCRIPTION") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import saudiLogo from "../assets/images/elsafwa-logo.svg";
import egyptLogo from "../assets/images/feroania-logo.png";
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
  color: var(--color-dark); /* Assuming black/dark text variable exists or default */
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

.company-card {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 300px;
}

.company-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.company-card:nth-child(even) {
  flex-direction: row-reverse;
}

.logo-wrapper {
  flex: 0 0 300px; /* Fixed width for logo area */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f2f5 0%, #ffffff 100%);
  border-right: 1px solid #eaeaea;
}

[dir="rtl"] .company-card:nth-child(even) .logo-wrapper {
  border-right: none;
  border-left: 1px solid #eaeaea;
}

[dir="rtl"] .logo-wrapper {
  border-left: 1px solid #eaeaea;
  border-right: none;
}

.company-logo {
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.company-card:hover .company-logo {
  transform: scale(1.05);
}

.company-content {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.company-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-dark); /* Fallback to black if not defined */
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.company-name::before {
  content: "";
  position: absolute;
  bottom: -8px;
  width: 40px;
  height: 3px;
  background-color: var(--color-golden);
}

[dir="rtl"] .company-name::before {
   right: 0;
}
[dir="ltr"] .company-name::before {
   left: 0;
}

.company-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .company-card,
  .company-card:nth-child(even) {
    flex-direction: column;
    text-align: center;
  }

  .logo-wrapper {
    flex: 0 0 auto;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eaeaea;
    padding: 2rem 1rem;
  }

  [dir="rtl"] .logo-wrapper,
  [dir="rtl"] .company-card:nth-child(even) .logo-wrapper {
      border-left: none;
  }

  .company-content {
    padding: 2rem 1.5rem;
  }

  .company-name::before {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }
  
  [dir="rtl"] .company-name::before {
    right: 50%;
    transform: translateX(50%);
    left: auto;
  }
}
</style>
