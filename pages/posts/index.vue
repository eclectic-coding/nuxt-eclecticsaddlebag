<template>
  <div class="container">
    <NavBar />
    <h1 class="title has-margin-top-30 has-padding-left-15">Blog Posts</h1>
    <main>
      <div v-for="post in paginatedData" :key="post.attributes.title"
           class="card card__effect is-horizontal columns has-margin-15">
        <PostImg :post="post" />
        <div class="card-content column is-three-quarter">
          <PostTitle :post="post" />
          <PostMeta :post="post" />
          <PostContent :post="post" />
        </div>
      </div>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a @click="prevPage" :disabled="pageNumber===0" class="pagination-previous">Previous</a>
        <a @click="nextPage" :disabled="pageNumber >= pageCount -1" class="pagination-next">Next page</a>
      </nav>
<!--      <button @click="prevPage" :disabled="pageNumber===0">Previous</button>-->
<!--      <button @click="nextPage" :disabled="pageNumber >= pageCount -1">Next</button>-->
    </main>
  </div>
</template>
<script>
  import moment from 'moment'
  import PostImg from '../../components/Post/PostImg'
  import PostTitle from '../../components/Post/PostTitle'
  import PostContent from '../../components/Post/PostContent'
  import PostMeta from '../../components/Post/PostMeta'
  import NavBar from '../../components/NavBar'

  export default {
    components: { NavBar, PostMeta, PostContent, PostTitle, PostImg },
    data() {
      return {
        pageNumber: 0
      }
    },
    props: {
      size: {
        type: Number,
        required: false,
        default: 5
      }
    },
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
      },
      nextPage() {
        this.pageNumber++
      },
      prevPage() {
        this.pageNumber--
      }
    },
    computed: {
      pageCount() {
        let l = this.posts.length,
          s = this.size
        return Math.ceil(l/s)
      },
      paginatedData() {
        const start = this.pageNumber * this.size,
          end = start + this.size
        return this.posts.slice(start, end)
      }
    },
    head() {
      return {
        title: 'Blog posts',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'All blog posts on EclecticSaddlebag'
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
