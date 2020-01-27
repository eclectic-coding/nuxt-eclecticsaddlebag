<template>
  <div>
    <section class="hero is-success is-fullheight">
      <NavBar />
      <div class="hero-body">
        <div class="container has-text-centered hero__card">
          <h1 class="title">
            Welcome to my Eclectic Corner
          </h1>
          <div>Be sure to check out my <button class="button is-primary">Tech Blog</button></div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-margin-20">
          <div class="content has-text-centered">
            <p class="is-size-6 has-text-white-ter">
              <strong>&#9400; </strong>&copy; 2020 EclecticSaddlebag.com by <a
              href="mailto:chuck@eclecticsaddlebag.com">Chuck Smith</a>. The source code is licensed <a
              href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar'

  export default {
    components: { NavBar }
  }
</script>

<style scoped>
  .hero {
    height: 100%;
    background: url(https://source.unsplash.com/feXpdV001o4/1800x1500) no-repeat center center fixed;
    background-size: cover;
  }

  .hero__card {
    margin: 4em;
    background-color: rgba(0,0,0,0.5);
    width: 300px;
    padding: 2em 0;
  }
</style>
