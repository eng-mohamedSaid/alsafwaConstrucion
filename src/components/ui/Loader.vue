<template>
  <div class="loader-container">
    <div class="loader">
      <img class="logo-icon" src="../../assets/images/elsheikh-groups-icon.svg" />

      <p class="alsafwa">AL El Sheikh</p>
      <p class="construction">Group</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader-container {
  height: 100vh;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
.logo-icon {
  max-width: 150px;
  animation: heartbeat 1.5s ease-in-out infinite both;
}

.alsafwa {
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--color-dark);
  animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.construction {
  font-size: 2.3rem;
  margin-top: -28px;
  font-weight: bold;
  color: var(--color-dark);
  animation: slide-in-bottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-elliptic-top-fwd {
  0% {
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 1400px;
    opacity: 1;
  }
}
</style>
