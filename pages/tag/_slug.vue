<template>
  <div>
    <h1 :key="'/' + params.slug">Posts:</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="'/tag'">
          {{post.attributes.title}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    async asyncData() {
      const resolve = await require.context('~/content/posts/', true, /\.md$/)
      let imports = resolve.keys().map((key) => resolve(key))

      imports = imports.filter(
        (post) =>
          post.attributes.tags.filter((tag) => tag === post.attributes.slug).length
      )
      return { posts: imports }
    },
    props: {
      post: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
