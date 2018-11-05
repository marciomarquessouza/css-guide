<template>
  <p class="title-font">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="css">
</style>
