<template>
  <div>
    <a id="services" name="anchor-section" class="anchor-section"></a>
    <div class="modals flex">
      <base-modal
        v-for="(item, index) in data"
        :key="index"
        :title="item.title"
        :description="item.description"
        :images="item.images"
      ></base-modal>
    </div>
  </div>
</template>

<script setup>
import BaseModal from "./ui/BaseModal.vue";

import { reactive, watch } from "vue";
import { useI18n } from "vue-i18n";

// Use glob to import all images dynamically
const concreteImages = import.meta.glob("../assets/images/4-Concrete/*.webp", {
  eager: true,
  as: "url",
});
const interlockImages = import.meta.glob(
  "../assets/images/5-Interlock/*.webp",
  { eager: true, as: "url" },
);
const isolationImages = import.meta.glob(
  "../assets/images/6-Isolation/*.webp",
  { eager: true, as: "url" },
);
const infraImages = import.meta.glob("../assets/images/7-Infra/*.webp", {
  eager: true,
  as: "url",
});
const wallsImages = import.meta.glob("../assets/images/8-Walls/*.webp", {
  eager: true,
  as: "url",
});
const flooringImages = import.meta.glob("../assets/images/9-Flooring/*.webp", {
  eager: true,
  as: "url",
});
const ceilingImages = import.meta.glob("../assets/images/10-Ceiling/*.webp", {
  eager: true,
  as: "url",
});
const claddingImages = import.meta.glob("../assets/images/11-Cladding/*.webp", {
  eager: true,
  as: "url",
});
const glassImages = import.meta.glob("../assets/images/12-Glass/*.webp", {
  eager: true,
  as: "url",
});
const paintingImages = import.meta.glob("../assets/images/13-Painting/*.webp", {
  eager: true,
  as: "url",
});
const doorsImages = import.meta.glob("../assets/images/14-Doors/*.webp", {
  eager: true,
  as: "url",
});
const landscapeImages = import.meta.glob(
  "../assets/images/15-Landscape/*.webp",
  { eager: true, as: "url" },
);
const electronicImages = import.meta.glob(
  "../assets/images/16-electronic/*.webp",
  { eager: true, as: "url" },
);
const porslinImages = import.meta.glob("../assets/images/17-porslin/*.webp", {
  eager: true,
  as: "url",
});

// Helper to convert glob object values to array
const getImages = (globObj) => Object.values(globObj);

const i18n = useI18n({ useScope: "global" });
const data = reactive([
  {
    title: i18n.t("WORKS_4.TITLE"),
    description: i18n.t("WORKS_4.DESCRIPTION"),
    images: getImages(concreteImages),
  },

  {
    title: i18n.t("WORKS_5.TITLE"),
    description: i18n.t("WORKS_5.DESCRIPTION"),
    images: getImages(interlockImages),
  },

  {
    title: i18n.t("WORKS_6.TITLE"),
    description: i18n.t("WORKS_6.DESCRIPTION"),
    images: getImages(isolationImages),
  },
  {
    title: i18n.t("WORKS_7.TITLE"),
    description: i18n.t("WORKS_7.DESCRIPTION"),
    images: getImages(infraImages),
  },
  {
    title: i18n.t("WORKS_8.TITLE"),
    description: i18n.t("WORKS_8.DESCRIPTION"),
    images: getImages(wallsImages),
  },
  {
    title: i18n.t("WORKS_9.TITLE"),
    description: i18n.t("WORKS_9.DESCRIPTION"),
    images: getImages(flooringImages),
  },
  {
    title: i18n.t("WORKS_10.TITLE"),
    description: i18n.t("WORKS_10.DESCRIPTION"),
    images: getImages(ceilingImages),
  },
  {
    title: i18n.t("WORKS_11.TITLE"),
    description: i18n.t("WORKS_11.DESCRIPTION"),
    images: getImages(claddingImages),
  },
  {
    title: i18n.t("WORKS_12.TITLE"),
    description: i18n.t("WORKS_12.DESCRIPTION"),
    images: getImages(glassImages),
  },
  {
    title: i18n.t("WORKS_13.TITLE"),
    description: i18n.t("WORKS_13.DESCRIPTION"),
    images: getImages(paintingImages),
  },
  {
    title: i18n.t("WORKS_14.TITLE"),
    description: i18n.t("WORKS_14.DESCRIPTION"),
    images: getImages(doorsImages),
  },
  {
    title: i18n.t("WORKS_15.TITLE"),
    description: i18n.t("WORKS_15.DESCRIPTION"),
    images: getImages(landscapeImages),
  },
  {
    title: i18n.t("WORKS_16.TITLE"),
    description: i18n.t("WORKS_16.DESCRIPTION"),
    images: getImages(electronicImages),
  },
  {
    title: i18n.t("WORKS_17.TITLE"),
    description: i18n.t("WORKS_17.DESCRIPTION"),
    images: getImages(porslinImages),
  },
]);
</script>

<style scoped>
.modals {
  gap: 30px;
  max-width: 1300px;
  flex-wrap: wrap;
  margin: 80px auto;
  padding: 0 15px;
}

@media (max-width: 500px) {
  .modals {
    gap: 15px;
    margin: 40px auto;
  }
}
</style>
