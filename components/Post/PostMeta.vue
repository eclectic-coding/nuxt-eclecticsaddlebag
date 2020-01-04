<template>
  <p class="has-margin-bottom-15 has-margin-left-10">
    <Fas i="calendar-alt" />
    <small class="has-margin-right-10 ">{{ parsedDate(post)
      }}</small>
    <span v-for="tag in post.attributes.tags"
          class="tag has-margin-right-10 is-primary is-light">
              <nuxt-link :to="'/tag/'+tag" style="padding-right: 0.5em">
                {{tag}}
              </nuxt-link>
            </span>
  </p>
</template>

<script>
  import Fas from '~/components/Fas';

  export default {
    props: {
      post: Object,
      default: () => {}
    },
    components: {
      Fas
    },
    methods: {
      parsedDate(post) {
        const postDate = new Date(post.attributes.date)
        return postDate.toDateString()
      }
    }
  }
</script>
