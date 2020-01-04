<template>
    <nuxt-link :to="`/posts` + post.attributes.slug">
      <h2 class="title is-4 has-margin-bottom-5">
        {{ post.attributes.title }}
      </h2>
    </nuxt-link>
</template>

<script>
  export default {
    props: {
      post: Object,
      default: () => {}
    }
  }
</script>
