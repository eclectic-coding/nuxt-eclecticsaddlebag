<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand navbar-start">
        <a class="navbar-item" href="/">
          <h1 class="title">Eclectic Saddlebag</h1>
        </a>

        <a role="button" class="navbar-burger burger"
           @click="showNav = !showNav" :class="{ 'is-active': showNav}"
           aria-label="menu"
           aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu"
           @click="showNav = !showNav" :class="{ 'is-active': showNav}">
        <div class="navbar-end">
          <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
          <NuxtLink to="/posts" class="navbar-item">Blog</NuxtLink>
        </div>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        showNav: false
      }
    },
    name: 'NavBar'
  }
</script>


