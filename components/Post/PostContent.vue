<template>
  <div class="content">
    {{ post.attributes.short }}
  </div>
</template>

<script>
  export default {
    props: {
      post: Object,
      default: () => {}
    }
  }
</script>
