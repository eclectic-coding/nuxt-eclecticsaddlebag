<template>
  <div class="container">
    <h1 class="title">My blog posts:</h1>
    <section class="posts">
      <ul>
        <li v-for="post in posts" :key="post.attributes.title" class="columns">
          <p class="title is-4">
            <nuxt-link :to="'/posts' + post.attributes.slug">
              {{post.attributes.title}}
            </nuxt-link>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import moment from 'moment';
  
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
