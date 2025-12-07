<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

// --- Consolidated Content Data for All Tabs ---
const allArticles = {
    // Tab 1 Content: PROG 1 Fundamentals (Existing Content)
    prog1_fundamentals: {
        title: 'PROG 1: Computer Programming 1 - Fundamental Concepts 💻',
        author: 'Feleciano L. Santiago Jr., MSIT',
        sections: [
            { id: 'intro', title: '1. Introduction and Course Purpose', content: `These notes are prepared for academic purposes to serve as a reference and learning material for students, especially enrolled in subject Computer Programming 1, Subject Code: PROG 1. The notes are intended to provide an idea, concise, and organized summary of key topics discussed or will be discussed in class, supporting both classroom instruction and independent study of the student. The content is compiled by the instructor for the specific section and is not intended for every section, thus this note will enhance understanding, promote critical thinking, and serve as a reliable guide throughout the course.`, },
            { id: 'computer', title: '2. Computer: Definition and Role', content: `A **Computer** is an electronic device that receives **data (input)**, processes it according to a set of instructions (**program**), stores the information, and produces **results (output)**. It is capable of performing arithmetic and logical operations at high speed and accuracy, making it an essential tool for problem-solving, communication, and automation in various fields.`, },
            { id: 'programming', title: '3. Programming: Process and Execution', content: `**Programming** refers to a technological process for telling a computer which tasks to perform in order to solve problems. You can think of programming as a collaboration between humans and computers, in which humans create instructions for a computer to follow (code) in a language computers can understand. **How does programming work?** At its most basic, programming tells a computer what to do. First, a programmer writes code (a set of letters, numbers, and other characters). Next, a **compiler** converts each line of code into a language a computer can understand. Then, the computer scans the code and executes it, thereby performing a task or series of tasks. Tasks might include displaying an image on a webpage or changing the font of a section of text. `, },
            { id: 'compiler', title: '4. Compiler: The Code Translator', content: `A **Compiler** is a special program that translates source code written in a high-level programming language into machine code (binary instructions) that a computer’s processor can understand and execute. > **Note:** Understand the concept but try not to dig deeper, digging deeper would move us another area of topic.`, },
            { id: 'languages', title: '5. Programming Languages and Usage', content: `**Programming Languages** enable programmers to write code that computers understand. **a. C Language:** One of the earliest and most powerful programming languages. * **Usage:** System programming (Operating Systems, device drivers), Embedded systems, Game development (low-level performance). **b. C++ Language:** Extension of C with object-oriented features. * **Usage:** System software (compilers, OS components), Game development (Unreal Engine), High-performance applications (banking, simulations, engineering software). **c. Java Language:** Platform-independent (“write once, run anywhere”) via the JVM. * **Usage:** Enterprise applications (banking, corporate systems), Android app development, Web back-end systems. **d. Other Popular Languages:** Python, Javascript, C#, PHP.`, },
            { id: 'ide', title: '6. IDE (Integrated Development Environment)', content: `An **IDE** is a software application that provides programmers with a comprehensive environment to write, edit, compile, debug, and run code efficiently. It combines essential development tools into a single interface, usually including: * **Code editor** – for writing source code with features like syntax highlighting and auto-completion. * **Compiler/Interpreter** – to translate code into machine language. * **Debugger** – to test and fix errors in programs. * **Build automation tools** – to simplify compiling and running programs. **Examples of IDEs:** Visual Studio, Eclipse, NetBeans, Code::Blocks, Dev-C++, PyCharm, VS.`, },
            { id: 'helloworld', title: '7. Get Started! Hello, World! Using C++', content: `**Recap:** To get started, we need tools for development: a programming language, a Compiler, a Text Editor / IDE, and the project goal. **Tools for Development:** * **For mobile:** Install Applications that states: Compiler for C++ * **For Desktop / Computer:** Visual Studio, Eclipse, NetBeans, Code::Blocks, Dev-C++, PyCharm, VS. ### C++ Hello World Example \`\`\`cpp #include <iostream> using namespace std; int main() { cout << "Hello, World!" << endl; return 0; } \`\`\` **Output:** \`Hello, World!\` **Key Parts Explanation:** * **#include <iostream>**: Tells the compiler to include the input/output library. * **using namespace std;**: Lets us use standard commands like \`cout\` without writing \`std::cout\`. * **int main()**: The entry point of every C++ program. * **cout << "Hello, World!";**: Outputs text to the screen. * **return 0;**: Indicates the program ran successfully.`, },
        ],
    },

    // Tab 2 Content: Data Types, Operations, and Looping (Existing Content)
    core_syntax: {
        title: 'C++ Core Syntax: Data, Operations, and Control Flow',
        author: 'Code Partner AI',
        sections: [
            { id: 'data_types', title: '1. Data Types and Variables', content: `In C++, every variable must be declared with a specific **data type**, which determines the size and layout of the variable's memory. * **int:** Stores whole numbers (integers, e.g., 10, -5). * **float / double:** Stores decimal numbers (floating-point, e.g., 3.14). \`double\` offers greater precision. * **char:** Stores a single character (e.g., 'A', '7'). * **bool:** Stores boolean values (\`true\` or \`false\`). **Variables** are declared by specifying the type, followed by the name, e.g., \`int age = 25;\`.`, },
            { id: 'operators', title: '2. Arithmetic and Logical Operations', content: `**Operators** are used to perform operations on variables and values. **Arithmetic Operators:** Perform mathematical calculations. * \`+\`, \`-\`, \`*\`, \`/\` (Addition, Subtraction, Multiplication, Division) * \`%\` (**Modulo**): Returns the remainder of a division. **Comparison Operators:** Used to compare two values, resulting in a boolean (\`true\` or \`false\`). * \`==\` (Equal to), \`!=\` (Not equal to), \`>\` (Greater than), \`<\` (Less than). **Logical Operators:** Used to combine conditional statements. * \`&&\` (**AND**), \`||\` (**OR**), \`!\` (**NOT**).`, },
            { id: 'conditional', title: '3. Control Flow: Conditional Statements', content: `**Conditional statements** execute different blocks of code based on whether a specified condition is true or false. * **if / else:** Executes one block of code if the condition is true, and another if it is false. \`\`\`cpp if (score >= 90) { cout << "Passed!"; } else { cout << "Try again."; } \`\`\` * **switch:** Used to perform different actions based on different values (cases) of a single variable.`, },
            { id: 'looping', title: '4. Looping Constructs (Iteration)', content: `**Loops** execute a block of code repeatedly until a specific condition is met. They are essential for repetitive tasks. * **for loop:** Used when you know exactly how many times you want to iterate. \`\`\`cpp for (int i = 0; i < 5; i++) { cout << i; // Outputs 01234 } \`\`\` * **while loop:** Repeats a block of code as long as a specified condition is true. It is best used when the number of iterations is unknown. * **do...while loop:** Similar to the \`while\` loop, but the code block is executed **at least once** before the condition is tested.`, },
        ],
    },
};

// --- Reactive State and Logic ---
const activeTab = ref('prog1_fundamentals'); // Default to the first tab
const activeSectionId = ref(allArticles.prog1_fundamentals.sections[0].id); // Default to the first section

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
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                        activeSectionId.value = entry.target.id;
                    }
                });
            },
            { 
                rootMargin: `-120px 0px -80% 0px`, // Detect when a section is near the top
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
        const headerOffset = 160; // Adjusted for two fixed header bars
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
<div class="rev">
    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <div class="border-b plain shadow-2xl border-gray-200 dark:border-gray-700 mb-8 sticky top-16 z-40 plain rounded-lg p-2 pt-2">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        @click="switchTab('prog1_fundamentals')"
                        :class="[
                            activeTab === 'prog1_fundamentals' 
                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500',
                            'whitespace-nowrap py-3 px-1 border-b-2 text-sm transition duration-150'
                        ]"
                    >
                        PROG 1: Fundamentals
                    </button>
                    <button
                        @click="switchTab('core_syntax')"
                        :class="[
                            activeTab === 'core_syntax' 
                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500',
                            'whitespace-nowrap py-3 px-1 border-b-2 text-sm transition duration-150'
                        ]"
                    >
                        Data Types, Operations & Loops
                    </button>
                </nav>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">

                <aside class="lg:col-span-1">
                    <div class="sticky top-40"> <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                            Table of Contents
                        </h3>
                        <nav class="space-y-1">
                            <button 
                                v-for="section in currentArticle.sections" 
                                :key="section.id"
                                @click="scrollToSection(section.id)"
                                class="w-full text-left p-2 rounded-lg transition duration-150 text-sm"
                                :class="{ 
                                    'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold': activeSectionId === section.id,
                                    'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800': activeSectionId !== section.id
                                }"
                            >
                                {{ section.title }}
                            </button>
                        </nav>
                    </div>
                </aside>

                <article class="lg:col-span-3 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
                     p
                    <header class="mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
                        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                            {{ currentArticle.title }}
                        </h1>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            By **{{ currentArticle.author }}** | Nov 26, 2025
                        </div>
                    </header>

                    <div class="space-y-10">
                        <section 4
                            v-for="(section, index) in currentArticle.sections" 
                            :key="section.id" 
                            :id="section.id" 
                            class="pt-2" 
                            :class="{ 'border-t border-gray-300 dark:border-gray-700': index !== 0 }"
                        >
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                {{ section.title }}
                            </h2>
                            <div 
                                class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4"
                                v-html="section.content"
                            >
                            </div>
                        </section>
                    </div>

                    <footer class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
                        End of {{ currentArticle.title }}. Review the topics using the Table of Contents.
                    </footer>
                </article>
            </div>
        </div>
    </AuthenticatedLayout>
     </div>
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