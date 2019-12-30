<template>
  <div class="container blog">
    <div class="post-head">
      <h1 class="title has-margin-bottom-5">{{post.attributes.title}}</h1>
      <img :src="post.attributes.image" v-if="post.attributes.image">
      <div class="has-margin-bottom-15 has-padding-left-5">
        <div class="subtitle post-meta">
          <Fas i="calendar-alt" />
          <span class="has-margin-right-10">{{ parsedDate }}</span>
          <span v-for="tag in post.attributes.tags"
                class="tag has-margin-right-10 is-primary is-light">
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
  import Fas from '~/components/Fas'
  import Prism from '~/plugins/prism'


  export default {
    components: {
      Fas
    },
    async asyncData({ params }) {
      let post = await import(`~/content/posts/${params.slug}.md`)
      return { post }
    },
    mounted() {
      Prism.highlightAll()
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
    },
    computed: {
      parsedDate() {
        const postDate = new Date(this.post.attributes.date)
        return postDate.toDateString()
      }
    },
  }
</script>

<style scoped lang="scss">
  .blog {
    margin: 1em;
  }

  .post-meta {
    font-size: 0.8em;
  }
</style>
