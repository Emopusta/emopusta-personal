<template>
  <div class="container py-4">
    <div class="row g-4">
      <!-- Left Column - Circular Image -->
      <div class="col-12 col-md-4">
        <div class="sticky-top" style="top: 2rem;">
          <div class="text-center">
            <img 
              src="../public/ben.jpeg" 
              alt="Emre Duman" 
              class="img-fluid rounded-circle border border-primary border-4 shadow"
              style="width: 200px; height: 200px; object-fit: cover;"
            />
          </div>
        </div>
      </div>

      <!-- Right Column - Information -->
      <div class="col-12 col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="mb-4">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start">
                <div class="text-center text-md-start mb-3 mb-md-0">
                  <h2 class="card-title h3">Emre Duman</h2>
                  <p class="text-muted">Software Developer (.Net)</p>
                </div>
                <div class="d-flex gap-3">
                  <a href="https://github.com/Emopusta" target="_blank" class="text-dark text-decoration-none">
                    <i class="bi bi-github fs-4"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/emreduman-emopusta/" target="_blank" class="text-dark text-decoration-none">
                    <i class="bi bi-linkedin fs-4"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <h3 class="h4 mb-2">About</h3>
              <p class="text-muted">
                I am a Computer Engineer who graduated from Bursa Uludağ University and am currently pursuing an MSc. in Computer 
                Engineering at the same institution. I am a studious person who has algorithmic, fast learning skills and is enthusiastic to 
                learn lifelong. I have contributed to lots of open-source projects and am still contributing to others while I am learning. 
                In my free time, I enjoy doing sports, reading different genres of books, socializing, gaming, and mostly learning anything 
                that is related to my wide curiosity.   
              </p>
            </div>

            <div class="mb-4">
              <h3 class="h4 mb-3">Professional Experience</h3>
              
              <div class="mb-3">
                <h4 class="h5 text-primary mb-2">adesso Turkey - December 2023 / Current – Junior Software Developer (.Net)</h4>
                <ul class="list-unstyled ms-3">
                  <li class="mb-2">• Contributed internal push notification application. </li>
                  <li class="mb-2">• Contributed internal framework for .net applications. </li>
                  <li class="mb-2">• Developed full-stack Young adessi projects. (*
                    <a href="https://github.com/Emopusta/adessibinden">.Net BE</a>*, 
                    <a href="https://github.com/Emopusta/adessibinden-nodejs">Node BE</a>, 
                    <a href="https://github.com/Emopusta/adessibinden-blazor">Blazor FE</a>) </li>
                </ul>
              </div>

              <div class="mb-3">
                <h4 class="h5 text-primary mb-2">Philip Morris International – May 2024 / Current – Contracted Software Developer </h4>
                <ul class="list-unstyled ms-3">
                  <li class="mb-2">• 
                  As a contracted software developer from adesso Turkey, I provide maintenance, modernization, and development 
                  support for various applications. </li>
                </ul>
              </div>

              <div class="mb-3">
                <h4 class="h5 text-primary mb-2">TOFAŞ - March 2023 / September 2023 – Quality Team Internee</h4>
                <ul class="list-unstyled ms-3">
                  <li class="mb-2">•
                     Developed full stack applications using .Net and Angular for web projects. </li>
                  <li class="mb-2">• 
                    Created software solutions for automation of processes in the Quality Directorship. </li>
                </ul>
              </div>
            </div>

            <div class="mb-4">
              <h3 class="h4 mb-3">Open Source Contributions</h3>
              <ul class="list-unstyled ms-3">
                <li class="mb-2">• 
                  Contributed to <a href="https://github.com/jbog ard/MediatR">MediatR</a> library.</li>
                  <li class="mb-2">• 
                    Contributed to <a href="https://github.com/ardalis/CleanArchitecture">CleanArchitecture</a> project.</li>
              </ul>
              <li class="mb-2">• 
                Researched and developed autonomous vehicle for graduation <a href="https://www.youtube.com/watch?v=nQ503lxVw8E">project</a> </li>
            </div>

            <div class="mb-4">
              <h3 class="h4 mb-2">Skills</h3>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-primary-subtle text-primary">C# .NET</span>
                <span class="badge bg-primary-subtle text-primary">SOLID Principles</span>
                <span class="badge bg-primary-subtle text-primary">Refactoring</span>
                <span class="badge bg-primary-subtle text-primary">Testing (Unit, Integration, Load, Performance) (JMeter, XUnit, Selenium, Moq)</span>
                <span class="badge bg-primary-subtle text-primary">Git (GitHub, Bitbucket, Gitlab)</span>
                <span class="badge bg-primary-subtle text-primary">Docker</span>
                <span class="badge bg-primary-subtle text-primary">SQL && NoSQL (PostgreSQL, MongoDB, SqlServer)</span>
                <span class="badge bg-primary-subtle text-primary">Analitycal Thinking</span>
                <span class="badge bg-primary-subtle text-primary">Agile Development (Scrum)</span>
                <span class="badge bg-primary-subtle text-primary">Database Design</span>
                <span class="badge bg-primary-subtle text-primary">Amazon Web Services (AWS), Azure</span>
                <span class="badge bg-primary-subtle text-primary">HTML/CSS</span>
                <span class="badge bg-primary-subtle text-primary">JavaScript, TypeScript, React, Node.js, Express, Vue.js, Nuxt.js, Blazor</span>
                <span class="badge bg-primary-subtle text-primary">WCF, IIS</span>
              </div>
            </div>

            <div class="mb-4">
              <h3 class="h4 mb-2">Languages</h3>
              <div class="d-flex flex-column gap-2">
                <div class="d-flex align-items-center">
                  <span class="text-muted me-2">Turkish:</span>
                  <span>Native</span>
                </div>
                <div class="d-flex align-items-center">
                  <span class="text-muted me-2">English:</span>
                  <span>Professional Working Proficiency (iTEP – 3.9/6 Upper Intermediate, CEFR: B2)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="h4 mb-2">Contact</h3>
              <div class="d-flex flex-column gap-2">
                <p class="mb-1">
                  <span class="text-muted">Email:</span>
                  <a href="mailto:emreduman225@hotmail.com" class="text-primary text-decoration-none ms-2">emreduman225@hotmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.sticky-top {
  position: sticky;
  z-index: 1020;
}

@media (max-width: 768px) {
  .sticky-top {
    position: relative;
    top: 0;
  }
}
</style> 