<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
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
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item">
            More
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
