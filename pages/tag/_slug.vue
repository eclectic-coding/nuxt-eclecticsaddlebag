<template>
  <div>
    <h1 :key="$route.params.slug">Posts:</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <PostShort :post="post" />
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    async asyncData({ params }) {
      const resolve = await require.context('~/content/posts/', true, /\.md$/)
      let imports = resolve.keys().map((key) => resolve(key))
      // filter out page type
      imports = imports.filter(
        (post) => post.attributes.tags.filter((tag) => tag === params.slug).length
      )
      return { posts: imports }
    }
  }
</script>
