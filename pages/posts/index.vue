<template>
  <div>
    <h1>My blog posts:</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="'/posts' + post.attributes.slug">
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
      // sort by date
      imports.sort((a, b) =>
        moment(b.attributes.date, 'DD/MM/YYYY').diff(moment(a.attributes.date, 'DD/MM/YYYY'))
      )
      return { posts: imports }
    }
  }
</script>
