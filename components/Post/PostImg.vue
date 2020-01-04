<template>
  <div class="card-image column is-one-quarter">
    <nuxt-link :to="`/posts` + post.attributes.slug">
      <figure class="image">
        <img v-if="post.attributes.image" :src="imgSrc(post)"
             :alt="post.attributes.title">
      </figure>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      post: Object,
      default: () => {}
    },
    methods: {
      imgSrc(post) {
        return require(`~/assets/images/${post.attributes.image}`)
      }
    }
  }
</script>
