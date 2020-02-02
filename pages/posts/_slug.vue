<template>
  <div>
    <vue-scroll-indicator
      height="7px"
      color="#11998e"
      background="none"
    >
    </vue-scroll-indicator>
  <NavBar />
<!--  TODO - Add Hero section-->
  <div class="container has-margin-top-20 has-padding-20">
    <div class="post-head">
      <h2 class="title is-size-4 has-margin-bottom-5">{{post.attributes.title}}</h2>
      <div class="has-margin-bottom-15">
        <div class="subtitle is-6">
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
    <div class="content has-margin-bottom-30" v-html="post.html"></div>
  </div>
  </div>
</template>

<script>
  import Fas from '~/components/Fas'
  import Prism from '~/plugins/prism'
  import PostImg from '../../components/Post/PostImg'
  import NavBar from '../../components/NavBar'

  export default {
    components: {
      NavBar,
      PostImg,
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
          href: 'https://eclecticsaddlebag.com' + this.post.attributes.slug
        }]
      }
    },
    computed: {
      parsedDate() {
        const postDate = new Date(this.post.attributes.date)
        return postDate.toDateString()
      }
    },
    methods: {
      imgSrc(post) {
        return require(`~/assets/images/${post.attributes.image}`)
      },
    }
  }
</script>
