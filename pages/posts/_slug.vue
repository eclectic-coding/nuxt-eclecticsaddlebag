<template>
  <div class="container blog">
    <div class="post-head">
      <h1 class="title has-margin-bottom-5">{{post.attributes.title}}</h1>
      <img :src="post.attributes.image" v-if="post.attributes.image">
      <div class="has-margin-bottom-10 has-padding-left-5">
        <div class="subtitle is-size-7">
          <Fas i="calendar-alt"/>
          {{post.attributes.date}} |
          <span v-for="tag in post.attributes.tags">
            <nuxt-link :to="'/tag/'+tag" style="padding-right: 0.5em">
              {{tag}}
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
  import Fas from '~/components/Fas';

  export default {
    components: {
      Fas
    },
    async asyncData({ params }) {
      let post = await import(`~/content/posts/${params.slug}.md`)
      return { post }
    },
    head() {
      return {
        title: this.post.attributes.title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.post.attributes.short
        }],
        link: [{
          rel: 'canonical',
          href: 'https://derkinzi.de' + this.post.attributes.slug
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .blog {
    margin: 1em;
  }

  .post {

    &--title {
      margin-bottom: 0.25em;
    }
  }
</style>
