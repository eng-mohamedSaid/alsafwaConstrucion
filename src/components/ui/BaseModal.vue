<template>
  <div>
    <button
      class="modal-button flex add-animation"
      animation-class="come-up"
      @click.prevent="openModal"
    >
      <img class="modal-button-img" alt="feature2 design" :src="images[0]" />
      <div class="modal-button-overlay"></div>
      <p class="">{{ title }}</p>
    </button>

    <div v-if="showModal === true">
      <transition name="fade" appear>
        <div class="modal-overlay" @click.prevent="closeModal"></div>
      </transition>

      <transition name="slide" appear>
        <form class="form">
          <button
            class="close-button"
            @click.prevent="closeModal"
            type="button"
          ></button>
          <h1 class="form-title">{{ title }}</h1>
          <p class="form-description">
            {{ description }}
          </p>
          <div class="form-images flex">
            <Carousel v-bind="config">
              <Slide v-for="image in images" :key="image">
                <img class="img-carousel" alt="project image" :src="image" />
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  document.body.style.overflowY = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflowY = "";
};

defineProps(["title", "description", "images"]);

const config = {
  height: 300,
  itemsToShow: 1,
  gap: 10,
  wrapAround: true,
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 2,
      snapAlign: "start",
    },
  },
};
</script>

<style scoped>
.modal-button {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  font-family: inherit;
}
.modal-button img {
  border-radius: 10px;
  position: absolute;
  background-size: cover;
}
.modal-button-overlay {
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.445);
  transition: all 0.3s;
}
.modal-button:hover .modal-button-overlay {
  background: rgba(229, 207, 165, 0.24);
}
.modal-button,
.modal-button img,
.modal-button-overlay {
  width: 280px;
  height: 150px;
}
.modal-button p {
  font-weight: 600;
  z-index: 1;
  color: var(--color-white);
  font-size: 25px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
}
.form {
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 55;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 1.5rem;
  text-align: center;
  align-items: center;
  margin: 1rem 0;
  background: white;
  border-radius: 10px;
}
.form-title {
  font-weight: 600;
  margin-bottom: 20px;
}
.form-description {
  font-size: 25px;
  line-height: 1.5;
  margin-bottom: 40px;
}
.form-images {
  gap: 15px;
}

.form-images img {
  max-width: 360px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
.close-button {
  cursor: pointer;
  top: 20px;
  width: 30px;
  height: 30px;
  position: absolute;
}

.close-button:before,
.close-button:after {
  content: "";
  position: absolute;
  height: 2px;
  width: 30px;
  background-color: grey;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: ease-out 0.3s all;
}

.close-button:before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close-button:after {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-button:hover:before {
  transform: translate(-50%, -50%) rotate(135deg);
}

.close-button:hover:after {
  transform: translate(-50%, -50%) rotate(225deg);
}
[dir="rtl"] .close-button {
  left: 20px;
}

[dir="ltr"] .close-button {
  right: 20px;
}

@media (max-width: 1250px) {
  .form {
    width: 90vw;
  }
  .form-images {
    gap: 15px;
  }

  .form-images img {
    max-width: 27vw;
  }
}

@media (max-width: 900px) {
  .form {
    justify-content: start;
    overflow-y: auto;
    max-height: 85%;
  }
  .form-title {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 18px;
    padding-top: 10px;
  }
  .form-description {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .modal-button,
  .modal-button img,
  .modal-button-overlay {
    width: 170px;
    height: 100px;
  }

  .modal-button p {
    font-size: 20px;
    line-height: 1.2;
  }
}
@media (max-width: 660px) {
  .modal-button,
  .modal-button img,
  .modal-button-overlay {
    width: 42vw;
    height: 130px;
  }
  .form-images {
    flex-direction: column;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .form-images img {
    /* max-width: 39vw;
    height: 250px; */
    max-width: 95%;
    height: 150px;
    /* object-fit: contain; */
  }
  .close-button {
    top: 12px;
  }
  [dir="rtl"] .close-button {
    left: 12px;
  }

  [dir="ltr"] .close-button {
    right: 12px;
  }
}
/* @media (max-width: 400px) {
  .modal-button,
  .modal-button img,
  .modal-button-overlay {
    width: 130px;
    height: 130px;
  }
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s; /* Combine transitions with a comma */
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(100vw);
}

.carousel {
  width: 100%;
  direction: ltr;
  /* Force LTR for carousel logic, but images remain correct. Important for navigation arrow placement */
}
.img-carousel {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
.carousel__slide {
  padding: 5px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: var(--vc-nav-background, rgba(255, 255, 255, 0.8));
  border-radius: 50%;
  color: #333;
}

@media (max-width: 600px) {
  .form {
    width: 95%;
    padding: 1.2rem;
  }
}
</style>
