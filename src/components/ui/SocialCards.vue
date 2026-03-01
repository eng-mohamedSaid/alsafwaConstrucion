<template>
  <div class="wrapper">
    <a
      class="contact-box add-animation"
      animation-class="come-up"
      href="https://wa.me/201080547475"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img class="icon" src="@/assets/images/whatsapp.svg" alt="WhatsApp" />
    </a>

    <a
      class="contact-box add-animation"
      animation-class="come-up"
      href="https://www.facebook.com/share/1AffA8QHsg"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <img class="icon" src="@/assets/images/facebook.svg" alt="Facebook" />
    </a>

    <a
      class="contact-box add-animation"
      animation-class="come-up"
      href="https://www.instagram.com/elsheikh_group1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <img class="icon" src="@/assets/images/instagram.svg" alt="Instagram" />
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
}

.contact-box {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 4px;
}

.contact-box:hover {
  transform: scale(1.1);
}

.icon {
  width: 35px;
  height: 35px;
  object-fit: contain;
  transition:
    filter 0.3s ease,
    transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.15);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .wrapper {
    gap: 14px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>
