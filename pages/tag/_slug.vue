<template>
  <div>
    <NavBar />
    <!--    TODO - add tag cloud-->
    <div class="container">
      <div :key="$route.params.slug" class="title is-3 has-margin-top-20">
        {{ tagTitle() }}
      </div>
      <main class="posts">
        <div v-for="post in posts" :key="post.attributes.title"
             class="card card__effect is-horizontal columns has-margin-15">
          <PostImg :post="post" />
          <div class="card-content column is-three-quarter">
            <PostTitle :post="post" />
            <PostMeta :post="post" />
            <PostContent :post="post" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import PostImg from '../../components/Post/PostImg'
  import PostTitle from '../../components/Post/PostTitle'
  import PostMeta from '../../components/Post/PostMeta'
  import PostContent from '../../components/Post/PostContent'
  import NavBar from '../../components/NavBar'

  export default {
    components: {
      NavBar,
      PostImg,
      PostTitle,
      PostMeta,
      PostContent
    },
    async asyncData({ params }) {
      const resolve = await require.context('~/content/posts/', true, /\.md$/)
      let imports = resolve.keys().map((key) => resolve(key))
      // filter out page type
      imports = imports.filter((post) => !post.attributes.type)
      imports = imports.filter(
        (post) => post.attributes.tags.filter((tag) => tag === params.slug).length
      )
      // sort by date
      imports.sort((a, b) =>
        moment(b.attributes.date, 'YYYY-MM-DD').diff(
          moment(a.attributes.date, 'YYYY-MM-DD')
        )
      )
      return { posts: imports }
    },
    methods: {
      tagTitle() {
        return this.$route.params.slug + ' Posts'
      },
      head() {
        return {
          title: 'Posts tagged ' + this.$route.params.slug,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: `All posts tagged ${this.$route.params.slug} on eclecticsaddlebag.com`
            }
          ],
          link: [
            {
              rel: 'canonical',
              href: `https://eclecticsaddlebag.com/tag/${this.$route.params.slug}`
            }
          ]
        }
      }
    }
  }
</script>
