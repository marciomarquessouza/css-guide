<template>
  <div>
    <p class="title-font">Basic</p>
    <ul class="list-item">
      <li v-for="(topic, index) in topics"  :key="index">
        <router-link :to="{ name: topic.name }">{{ topic.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          title: 'Text',
          name: 'Text',
        },
        {
          title: 'Borders',
          name: 'Borders',
        },
      ],
    };
  },
};
</script>

<style lang="css">
</style>
