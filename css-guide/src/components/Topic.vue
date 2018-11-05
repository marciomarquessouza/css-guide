<template>
  <div>
    <p class="title-font">Borders</p>
    <div v-for="border in borders"  :key="border.id">
      <p class="subtitle-font">{{ border.title }}</p>
      <div :id="border.id" class="box">
        <p> {{ border.text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      borders: [
        {
          title: 'Solid Border',
          id: 'solid-border',
          text: '1px solid;',
        },
        {
          title: 'Dotted Border',
          id: 'dotted-border',
          text: 'border: 2px dotted;',
        },
        {
          title: 'Dashed Border',
          id: 'dashed-border',
          text: 'border: 2px dashed #ccc;',
        },
      ],
    };
  },
};
</script>

<style lang="css">
</style>
