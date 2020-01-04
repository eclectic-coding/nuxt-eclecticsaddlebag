<template>
  <div >
    <h1 class="title">My Blog Posts</h1>
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
</template>
<script>
  import moment from 'moment'
  import PostImg from '../../components/Post/PostImg'
  import PostTitle from '../../components/Post/PostTitle'
  import PostContent from '../../components/Post/PostContent'
  import PostMeta from '../../components/Post/PostMeta'

  export default {
    components: { PostMeta, PostContent, PostTitle, PostImg },
    async asyncData() {
      const resolve = await require.context('~/content/posts/', true, /\.md$/)
      let imports = resolve.keys().map((key) => resolve(key))
      // sort by date
      imports.sort((a, b) =>
        moment(b.attributes.date, 'YYYY-MM-DD').diff(moment(a.attributes.date,
          'YYYY-MM-DD'))
      )
      return { posts: imports }
    },
    methods: {
      imgSrc(post) {
        return require(`~/assets/images/${post.attributes.image}`)
      },
      parsedDate(post) {
        const postDate = new Date(post.attributes.date)
        return postDate.toDateString()
      }
    },
    head() {
      return {
        title: 'Blog posts',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'All blog posts on eclecticsaddlebag.com'
          }
        ],
        link: [
          {
            rel: 'canonical',
            href: 'https://eclecticsaddlebag.com/posts'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .card__effect {
    transition: transform .5s;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
      content: '';
      opacity: 0;
      z-index: -1;
    }

    &:hover,
    &:focus {
      transform: scale3d(1.006, 1.006, 1);

      &::after {
        opacity: 1;
      }
    }
  }
</style>
