<template>
  <div class="footer flex">
    <div class="flex flex-col">
      <a class="logo add-animation" animation-class="fade-in" href="#hero">
        <img src="../assets/images/elsheikh-groups-logo.svg" alt="logo" />
      </a>

      <p class="add-animation" animation-class="come-up">
        {{ $t("FOOTER.ADDRESS") }}
      </p>
      <p class="add-animation" animation-class="come-up">
        {{ $t("FOOTER.SAUDI") }}
      </p>
    </div>

    <div id="contact" class="contact flex flex-col">
      <h1 class="add-animation" animation-class="fade-in">
        {{ $t("CONTACT") }}
      </h1>
      <a
        class="contact-box flex add-animation"
        animation-class="come-up"
        href="mailto:info@alsafwaconstruction.com"
      >
        <img class="icon" src="../assets/images/email.svg" alt="logo" />
        <p>ahmed@elsheikh-groups.com</p>
      </a>

      <a
        class="contact-box flex add-animation"
        animation-class="come-up"
        href="https://wa.me/201080547475"
        target="_blank"
      >
        <img class="icon" src="../assets/images/phone.svg" alt="logo" />
        <p dir="ltr">+20 01080577447</p>
      </a>
      <a
        class="contact-box flex add-animation"
        animation-class="come-up"
        href="https://wa.me/201080577447"
        target="_blank"
      >
        <img class="icon" src="../assets/images/phone.svg" alt="logo" />
        <p dir="ltr">+20 01080547475</p>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  justify-content: space-around;
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.3);
  padding: 2.5rem 0;
}
.logo {
  max-width: 110px;
  width: 100%;
  margin-bottom: 10px;
}
.contact {
  align-items: flex-start;
  gap: 20px;
}
.contact h1 {
  margin-bottom: 10px;
}
.footer p,
.footer a {
  font-weight: 600;
  font-size: 21px;
  justify-content: space-around;
  transition: all 0.3s;
}

.contact-box {
  cursor: pointer;
  gap: 10px;
  transition: all 0.3s;
}
.contact-box:hover {
  transform: scale(1.05);
}
.contact-box:hover p {
  color: rgb(150, 91, 35);
}
.icon {
  width: 35px;
}

@media (max-width: 800px) {
  .footer {
    flex-direction: column;
    gap: 25px;
  }
  .contact {
    align-items: center;
    gap: 4px;
    border-top: solid 1.5px var(--color-orange);
  }
  .contact h1 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 0px;
    margin-top: 5px;
  }

  .footer p,
  .footer a {
    font-size: 17px;
  }

  .icon {
    width: 25px;
  }
}
</style>
