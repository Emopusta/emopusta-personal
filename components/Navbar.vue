<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <NuxtLink class="navbar-brand text-white" to="/">Emre Duman</NuxtLink>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink 
              to="/blogs" 
              class="nav-link text-white px-3"
              active-class="active"
            >
              Blogs
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink 
              to="/about" 
              class="nav-link text-white px-3"
              active-class="active"
            >
              About
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Import Bootstrap dynamically
  import('bootstrap/dist/js/bootstrap.bundle.min.js')
})
</script>

<style scoped>
.navbar {
  padding: 1rem 0;
}
.nav-link {
  margin: 0 0.5rem;
  position: relative;
  font-size: 1.1rem;
}
.nav-link.active {
  font-weight: 600;
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
}
.navbar-toggler {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 