<script setup>
// You can define specific data or functions for the DM103 course here
</script>

<template>
  <div class="dm103-page nem ">
    <RouterLink to="/" class="back-link">← Back to Course List</RouterLink>
    
    <h1>Digital Management 103: Process Management Mastery</h1>
    
    <div class="content-section h1">
      <p>
        Welcome to your dedicated course page! This structure is perfect for managing
        course-specific content, modules, assignments, and announcements.
      </p>
      <h3>Course Modules Snapshot</h3>
      <ul>
        <li>Module 1: Workflow Analysis</li>
        <li>Module 2: Project Scoping and Planning</li>
        <li>Module 3: Agile vs. Waterfall Methodologies</li>
        <li>Module 4: Continuous Improvement Cycles</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dm103-page {
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.back-link {
  display: inline-block;
  margin-bottom: 25px;
  color: #41b883;
  text-decoration: none;
  font-weight: bold;
}

h1 {
  font-size: 2.2em;
  color: #34495e;
  margin-bottom: 30px;
}

.content-section {
  line-height: 1.6;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}
</style>