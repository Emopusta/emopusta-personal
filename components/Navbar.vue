<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <NuxtLink class="navbar-brand text-white" to="/">Emre Duman</NuxtLink>
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
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  padding: 1rem 0;
}

.nav-link {
  margin: 0 0.5rem;
  position: relative;
  font-size: 1.1rem;
  color: white !important;
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

@media (max-width: 991.98px) {
  .navbar-nav {
    margin-top: 1rem;
  }
  
  .nav-item {
    margin: 0.5rem 0;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
  }
}
</style> 