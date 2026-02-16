<template>
  <div
    class="content-card add-animation"
    :class="{ reverse: isReverse, 'full-width': isFullWidth }"
    animation-class="come-up"
  >
    <div class="logo-wrapper">
      <img :src="imageSrc" :alt="imageAlt" class="card-logo" />
    </div>
    <div class="card-content">
      <h2 class="card-name">{{ title }}</h2>
      <p class="card-desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "Image",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isReverse: {
    type: Boolean,
    default: false,
  },
  isFullWidth: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.content-card {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.content-card.reverse {
  flex-direction: row-reverse;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.logo-wrapper {
  flex: 0 0 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f2f5 0%, #ffffff 100%);
  border-right: 1px solid #eaeaea;
}

.content-card.reverse .logo-wrapper {
  border-right: none;
  border-left: 1px solid #eaeaea;
}

[dir="rtl"] .content-card.reverse .logo-wrapper {
  border-left: none;
  border-right: 1px solid #eaeaea;
}

[dir="rtl"] .logo-wrapper {
  border-left: 1px solid #eaeaea;
  border-right: none;
}

.card-logo {
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.content-card:hover .card-logo {
  transform: scale(1.05);
}

.card-content {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-name {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--color-dark);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.card-name::before {
  content: "";
  position: absolute;
  bottom: -8px;
  width: 40px;
  height: 3px;
  background-color: var(--color-golden);
}

[dir="rtl"] .card-name::before {
  right: 0;
}
[dir="ltr"] .card-name::before {
  left: 0;
}

.card-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
}

@media (max-width: 900px) {
  .content-card,
  .content-card.reverse {
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

  .content-card.reverse .logo-wrapper {
    border-left: none;
  }

  [dir="rtl"] .logo-wrapper,
  [dir="rtl"] .content-card.reverse .logo-wrapper {
    border-left: none;
    border-right: none;
  }

  .card-content {
    padding: 2rem 1.5rem;
  }

  .card-name::before {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }

  [dir="rtl"] .card-name::before {
    right: 50%;
    transform: translateX(50%);
    left: auto;
  }
  [dir="ltr"] .card-name::before {
    right: 50%;
    transform: translateX(50%);
    left: auto;
  }
}

.content-card.full-width .logo-wrapper {
  padding: 0;
}

.card-logo {
  max-height: 100px;
}
.card-name {
  font-size: 1.3rem;
}
.card-desc {
  font-size: 1rem;
}

.content-card.full-width .card-logo {
  height: 100%;
  max-width: none;
  max-height: none;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 900px) {
  .content-card.full-width .card-logo {
    height: 280px;
  }
}
</style>
