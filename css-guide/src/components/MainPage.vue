<template>
  <div>
    <p class="title-font">CSS ULTIMATE HYPER GUIDE</p>
    <div class="navigation">
      <ul class="list-item">
        <li><router-link :to="{ name: 'Basic' }">Basic</router-link></li>
        <li><router-link :to="{ name: 'Intermediate' }">Intermediate</router-link></li>
        <li><router-link :to="{ name: 'Advanced' }">Advanced</router-link></li>
      </ul>
    </div>
    <div class="content">
      <topic />
    </div>
  </div>
</template>

<script>

import Topic from './Topic';

export default {
  components: {
    topic: Topic,
  },
  methods: {
  },
};
</script>

<style lang="css">
  .page-background {
    background-color: #36688D;
  }
</style>
