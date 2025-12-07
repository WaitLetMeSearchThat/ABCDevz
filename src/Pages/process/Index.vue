<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

// --- Consolidated Content Data for All Tabs ---
const allArticles = {
    // Tab 1 Content: System Analyst (Includes ERD and Flow Chart)
    analyst: {
        title: 'System Analyst: Requirements and Modeling',
        author: 'Xian Santiago',
        sections: [
            {
                id: 'analyst_role',
                title: '1. Role and Core Responsibilities',
                content: `The **System Analyst** acts as a bridge between business needs and technical solutions. Their primary role is to analyze a system (manual or automated), identify problems, and define the requirements for a new or modified system. This involves heavy documentation and communication with stakeholders. They translate vague business objectives into clear technical specifications.`,
            },
            {
                id: 'erd',
                title: '2. Entity-Relationship Diagram (ERD)',
                content: `The **ERD** is a visual model that illustrates the logical structure of a database. It shows the **entities** (things, objects, or concepts) and the **relationships** between them (one-to-one, one-to-many, many-to-many). It is essential for database design, showing how data will be organized before any code is written. 

[Image of a simple Entity-Relationship Diagram (ERD) showing entities, attributes, and relationships]
`,
            },
            {
                id: 'flow_chart',
                title: '3. Flow Chart',
                content: `A **Flow Chart** is a diagram that represents a workflow, process, or system. It uses standardized symbols (e.g., rectangles for processes, diamonds for decisions) to show the sequence of steps and decision points. Flow charts provide a visual guide for programming logic and structured business procedures.`,
            },
        ],
    },

    // Tab 2 Content: Front-end Developer
    frontend: {
        title: 'Front-end Developer: User Experience and Interaction',
       author: 'Xian Santiago',
        sections: [
            {
                id: 'frontend_role',
                title: '1. Front-end Role & Responsibilities',
                content: `The **Front-end Developer** is responsible for the client-side of the application—everything the user sees and interacts with directly in their browser. They focus on the **User Interface (UI)** and **User Experience (UX)**.`,
            },
            {
                id: 'frontend_tech',
                title: '2. Core Technologies and Frameworks',
                content: `Key skills required are mastery of **HTML** (structure), **CSS** (styling and layout), and **JavaScript** (behavior and responsiveness). They often work with modern frameworks like **Vue.js**, React, or Angular to build efficient, scalable single-page applications.`,
            },
            {
                id: 'frontend_goals',
                title: '3. Performance and Accessibility',
                content: `Front-end goals include optimizing page load speed, ensuring responsiveness across devices (mobile, tablet, desktop), and adhering to accessibility standards (making the site usable by everyone).`,
            },
        ],
    },

    // Tab 3 Content: Backend Developer
    backend: {
        title: 'Backend Developer: Data and Application Logic',
     author: 'Xian Santiago',
        sections: [
            {
                id: 'backend_role',
                title: '1. Backend Role & Responsibilities',
                content: `The **Back-end Developer** handles the server-side logic, the "behind-the-scenes" infrastructure that powers the application. This is where data processing, security, and integration happen.`,
            },
            {
                id: 'backend_logic',
                title: '2. Application Logic and APIs',
                content: `They write the code that processes user input, handles authentication, and manages sessions. They build **Application Programming Interfaces (APIs)** that allow the frontend (client) to request and receive data from the server securely.`,
            },
            {
                id: 'backend_db',
                title: '3. Database Management and Security',
                content: `This role involves designing, creating, and querying databases (using SQL or ORMs). The focus is heavily on **data integrity**, ensuring transactional accuracy, and implementing robust **security measures** to protect sensitive user information.`,
            },
        ],
    },

    // Tab 4 Content: Project Manager
    pm: {
        title: 'Project Manager: Leadership and Delivery',
      author: 'Xian Santiago',
        sections: [
            {
                id: 'pm_role',
                title: '1. Project Manager Role and Workflow',
                content: `The **Project Manager (PM)** is responsible for leading the planning, execution, and closing of a project. Their role is to ensure the project is delivered on time, within budget, and meets all defined objectives.`,
            },
            {
                id: 'pm_planning',
                title: '2. Planning and Scheduling',
                content: `Key planning duties include defining the project scope, creating a detailed timeline (**Gantt charts** or similar tools), and allocating resources (team members, budget) effectively across the entire project lifecycle.`,
            },
            {
                id: 'pm_methodology',
                title: '3. Development Methodologies',
                content: `The PM typically employs various methodologies to manage the workflow, such as **Agile (Scrum)** for iterative development with frequent feedback, or **Waterfall** for sequential, phase-based projects. They choose the best approach based on the project's complexity and client needs.`,
            },
        ],
    },
};

// --- Reactive State and Logic ---
const activeTab = ref('analyst'); // Default to the first tab
const activeSectionId = ref(allArticles.analyst.sections[0].id); // Default to the first section of the first tab

// Computed property to dynamically fetch the content for the active tab
const currentArticle = computed(() => {
    return allArticles[activeTab.value];
});

let observer = null;

// Function to set up the Intersection Observer
const setupObserver = () => {
    // Disconnect old observer if it exists
    if (observer) {
        observer.disconnect();
    }

    // Wait for Vue to render the new sections before observing them
    nextTick(() => {
        // Observer setup: Detects which section is currently visible
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // Only update if the section is intersecting and is near the top of the viewport
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                        activeSectionId.value = entry.target.id;
                    }
                });
            },
            { 
                rootMargin: `-120px 0px -80% 0px`, // Detection zone near the top
                threshold: 0.2 // Trigger when 20% of the section is visible
            }
        );

        // Observe the elements of the current article
        currentArticle.value.sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });
    });
};

// Function to handle switching tabs
const switchTab = (tabName) => {
    activeTab.value = tabName;
    
    // 1. Immediately update the active section ID to the first section of the new tab (FIX)
    activeSectionId.value = allArticles[tabName].sections[0].id;
    
    // 2. Scroll to the top of the article content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 3. Re-initialize the Intersection Observer for the new content
    setupObserver();
};

// Function to handle TOC link clicks (scroll to the section)
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        // Scroll smoothly to the element, accounting for the fixed header and top tabs
        const headerOffset = 160; // Adjusted for two fixed header bars (main header + tabs)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        activeSectionId.value = id; // Update the active section state (manually on click)
    }
};

onMounted(() => {
    // Initialize observer when the component first loads
    setupObserver();
});
</script>

<template>
    <Head :title="currentArticle.title" />

    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <div class="border-b border-gray-200 dark:border-gray-700 mb-8 sticky top-16 z-40 bg-white dark:bg-gray-900/95 pt-2">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        @click="switchTab('analyst')"
                        :class="[
                            activeTab === 'analyst' 
                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500',
                            'whitespace-nowrap py-3 px-1 border-b-2 text-sm transition duration-150'
                        ]"
                    >
                        1. System Analyst
                    </button>
                    <button
                        @click="switchTab('frontend')"
                        :class="[
                            activeTab === 'frontend' 
                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500',
                            'whitespace-nowrap py-3 px-1 border-b-2 text-sm transition duration-150'
                        ]"
                    >
                        2. Front-end
                    </button>
                    <button
                        @click="switchTab('backend')"
                        :class="[
                            activeTab === 'backend' 
                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500',
                            'whitespace-nowrap py-3 px-1 border-b-2 text-sm transition duration-150'
                        ]"
                    >
                        3. Back-end
                    </button>
                    <button
                        @click="switchTab('pm')"
                        :class="[
                            activeTab === 'pm' 
                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500',
                            'whitespace-nowrap py-3 px-1 border-b-2 text-sm transition duration-150'
                        ]"
                    >
                        4. Project Manager
                    </button>
                </nav>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">

                <aside class="lg:col-span-1">
                    <div class="sticky top-40"> <h3 class="text-lg font-bold  mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                            Table of Contents
                        </h3>
                        <nav class="space-y-1">
                            <button 
                                v-for="section in currentArticle.sections" 
                                :key="section.id"
                                @click="scrollToSection(section.id)"
                                class="w-full text-left p-2 rounded-lg transition duration-150 text-sm"
                                :class="{ 
                                    'bg-indigo-50 dark:bg-indigo-900/50 h1': activeSectionId === section.id,
                                    'h1  hover:nem hover:rev': activeSectionId !== section.id
                                }"
                            >
                                {{ section.title }}
                            </button>
                        </nav>
                    </div>
                </aside>

                <article class="lg:col-span-3 rev nem    p-6 sm:p-8 rounded-xl shadow-lg">
                    
                    <header class="mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
                        <h1 class="text-4xl nem font-extrabold mb-2">
                            {{ currentArticle.title }}
                        </h1>
                        <div class="text-sm">
                            By **{{ currentArticle.author }}** | Dec 10, 2025
                        </div>
                    </header>

                    <div class="space-y-10">
                        <section 
                            v-for="(section, index) in currentArticle.sections" 
                            :key="section.id" 
                            :id="section.id" 
                            class="pt-2" 
                            :class="{ 'border-t  border-gray-300 dark:border-gray-700': index !== 0 }"
                        >
                            <h2 class="text-2xl font-bold  mb-4">
                                {{ section.title }}
                            </h2>
                            <div 
                                class="prose dark:prose-invert max-w-none h1 space-y-4"
                                v-html="section.content"
                            >
                            </div>
                        </section>
                    </div>

                    <footer class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
                        End of {{ currentArticle.title }} material.
                    </footer>
                </article>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
/* Scoped styles to ensure Tailwind's 'prose' class is available for content */
.prose :deep(p), .prose :deep(ul), .prose :deep(ol), .prose :deep(h1), .prose :deep(h2), .prose :deep(h3), .prose :deep(blockquote) {
    @apply leading-relaxed;
}

/* Custom styling for the embedded code block */
.prose :deep(pre) {
    @apply bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm;
}
</style>