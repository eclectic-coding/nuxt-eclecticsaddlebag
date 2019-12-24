<template>
  <div>
    <nuxt-link :to="post.attributes.slug">
      <h2>{{ post.attributes.title }}</h2>
    </nuxt-link>
    <div>
      {{ post.attributes.date }}
    </div>
    <div>
      {{ post.attributes.short }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
