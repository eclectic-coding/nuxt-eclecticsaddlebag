<template>
  <section>
    <div class="column is-one-quarter">
      Image Container
    </div>
    <div class="column is-three-quarter">
      <h3>{{ post.attributes.title }}</h3>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      post: Object,
      default: () => {}
    }
  }
</script>
