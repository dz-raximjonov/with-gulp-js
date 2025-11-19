const logIn = document.getElementById("logIn")
const loginModal = document.getElementById("loginModal")
const closeModal = document.getElementById("closeModal")
const emailLogin = document.getElementById("emailLogin")
const passwordLogin = document.getElementById("passwordLogin")
const loginBtn = document.getElementById("loginBtn")
const logout = document.getElementById("logout")
const loginAvatar = document.getElementById("loginAvatar")
const logoutBtn = document.getElementById("logoutBtn")
const searchBtn = document.getElementById("searchBtn")
const heroSec = document.getElementById("heroSec")
const trendingSec = document.getElementById("trendingSec")
const getSec = document.getElementById("getSec")
const upcomingSec = document.getElementById("upcomingSec")
const topFilter = document.getElementById("topFilter")
const searchList = document.getElementById("searchResults")
const filterDiv = document.getElementById("filter-sidebar")
const oldcards = document.getElementById("oldcards")
const myAccount = document.getElementById("myAccount")
const userAccount = document.getElementById("userAccount")
const courseSec = document.getElementById("courseSection")
const promosec = document.getElementById("promoSec")
const clearfilter = document.getElementById("clearFilter")


const ratingInputs = document.querySelectorAll('input[name="rating"]');
const levelInputs = document.querySelectorAll('input[name="level"]');
const durationCheckboxes = document.querySelectorAll('#filter-sidebar input[id^="dur"]');
const categoryCheckboxes = document.querySelectorAll('#filter-sidebar input[id^="cat"]');
const softwareCheckboxes = document.querySelectorAll('#filter-sidebar input[id^="soft"]');
const languageCheckboxes = document.querySelectorAll('#filter-sidebar input[id^="lang"]');


let isLogin = null

window.addEventListener("DOMContentLoaded", render)

logIn.addEventListener("click", () => {
    loginModal.style.display = "flex"
})
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none"
})
logoutBtn.addEventListener("click", () => {
    localStorage.setItem("login", "false")
    render()
})
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    searchCards()
})

userAccount.addEventListener("click", (e) => {
    e.preventDefault()
    heroSec.style.display = "none"
    courseSec.style.display = "none"
    promosec.style.display = "none"
    trendingSec.style.display = "none"
    upcomingSec.style.display = "none"
    getSec.style.display = "none"
    myAccount.style.display = "block"
})

loginBtn.addEventListener("click", loginUser)




function loginUser() {
    alert("muvafaqqiyatli kirish")
    loginModal.style.display = "none"
    localStorage.setItem("login", "true")
    render()
}

function render() {
    isLogin = localStorage.getItem("login")
    if (isLogin === "true") {
        loginAvatar.style.display = "flex"
        logout.style.display = "none"
    } else {
        loginAvatar.style.display = "none"
        logout.style.display = "flex"
    }
    console.log(durationCheckboxes.length)
    console.log(categoryCheckboxes.length)
    console.log(softwareCheckboxes.length)
    console.log(languageCheckboxes.length)

}
clearfilter.addEventListener("click", () => {
    searchCardsMap(courses)
})
function searchCards() {
    heroSec.style.display = "none"
    trendingSec.style.display = "none"
    getSec.style.display = "none"
    upcomingSec.style.display = "none"
    topFilter.style.display = "none"
    oldcards.style.display = "none"
    filterDiv.style.display = "block"
    searchCardsMap(courses)
}

const courses = [
    {
        id: 1,
        title: "UI/UX Design Principles",
        rating: 4.7,
        duration: 1.5,
        category: ["Design"],
        software: ["Figma"],
        level: "Beginner",
        language: "English"
    },
    {
        id: 2,
        title: "Advanced Illustrator Techniques",
        rating: 4.6,
        duration: 4,
        category: ["Design"],
        software: ["Adobe Illustrator"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 3,
        title: "React for Beginners",
        rating: 4.4,
        duration: 5,
        category: ["Programming"],
        software: ["React.js"],
        level: "Beginner",
        language: "English"
    },
    {
        id: 4,
        title: "Business Growth Strategy",
        rating: 3.8,
        duration: 3,
        category: ["Business & Marketing"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 5,
        title: "Finance Basics",
        rating: 3.5,
        duration: 6,
        category: ["Finance"],
        level: "Beginner",
        language: "English"
    },
    {
        id: 6,
        title: "Music Production Masterclass",
        rating: 4.8,
        duration: 12,
        category: ["Music & Film"],
        level: "Advanced",
        language: "English"
    },
    {
        id: 7,
        title: "Professional Photography",
        rating: 4.2,
        duration: 9,
        category: ["Photo & Video"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 8,
        title: "Creative Writing Essentials",
        rating: 3.9,
        duration: 2,
        category: ["Writing"],
        level: "Beginner",
        language: "English"
    },
    {
        id: 9,
        title: "Vue.js Complete Guide",
        rating: 4.1,
        duration: 7,
        category: ["Programming"],
        software: ["Vue.js"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 10,
        title: "Brand Design & Identity",
        rating: 4.3,
        duration: 3,
        category: ["Design"],
        software: ["Figma"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 11,
        title: "Digital Marketing Bootcamp",
        rating: 4.0,
        duration: 11,
        category: ["Business & Marketing"],
        level: "All",
        language: "English"
    },
    {
        id: 12,
        title: "Piano for Beginners",
        rating: 3.7,
        duration: 1,
        category: ["Music & Film"],
        level: "Beginner",
        language: "English"
    },
    {
        id: 13,
        title: "Film Editing in Premiere Pro",
        rating: 4.5,
        duration: 13,
        category: ["Photo & Video"],
        level: "Advanced",
        language: "English"
    },
    {
        id: 14,
        title: "Stock Market Basics",
        rating: 4.2,
        duration: 5,
        category: ["Finance"],
        level: "Beginner",
        language: "Spanish"
    },
    {
        id: 15,
        title: "Business Communication",
        rating: 3.6,
        duration: 2,
        category: ["Business & Marketing"],
        level: "Beginner",
        language: "French"
    },
    {
        id: 16,
        title: "Frontend Development Roadmap",
        rating: 4.4,
        duration: 10,
        category: ["Programming"],
        software: ["React.js"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 17,
        title: "Typography Masterclass",
        rating: 4.1,
        duration: 4,
        category: ["Design"],
        software: ["Adobe Illustrator"],
        level: "Advanced",
        language: "English"
    },
    {
        id: 18,
        title: "Writing Fiction Stories",
        rating: 3.8,
        duration: 6,
        category: ["Writing"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 19,
        title: "Portrait Photography",
        rating: 4.6,
        duration: 8,
        category: ["Photo & Video"],
        level: "Intermediate",
        language: "English"
    },
    {
        id: 20,
        title: "Ultimate React + Figma Workflow",
        rating: 4.9,
        duration: 12,
        category: ["Design"],
        software: ["Figma"],
        level: "Advanced",
        language: "English"
    }
];

function searchCardsMap(filteredCourses) {
    searchList.innerHTML = filteredCourses.map((data) => {
        return (`
                <article class="course-card">
                <div class="course-card__badges">
                    <span class="badge badge--bestseller">Best Seller</span>
                    <span class="badge badge--discount">20% OFF</span>
                </div>
                <img src="./assets/card1.png" alt="Course" class="course-card__img">
                <div class="course-card__body">
                    <h6 class="course-card__title">${data.title}</h6>
                    <p class="course-card__author">
                        <i class="fa-solid fa-user"></i> Kitani Studio
                    </p>
                    <div class="course-card__rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                        <span>(${data.rating})</span>
                    </div>
                    <p class="course-card__price">$24.92 <del>$32.90</del></p>
                </div>
            </article>
            `)
    }).join('')
}
function getCheckedValues(checkboxes, mapFn = x => x) {
    return Array.from(checkboxes).filter(cb => cb.checked).map(mapFn);
}

function getSelectedDurations() {
    return getCheckedValues(durationCheckboxes, cb => {
        switch (cb.id) {
            case 'dur0-2': return [0, 2];
            case 'dur3-5': return [3, 5];
            case 'dur6-12': return [6, 12];
            case 'dur12plus': return [12, Infinity];
        }
    });
}
function applyFilters() {
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
    const selectedLevel = document.querySelector('input[name="level"]:checked')?.id || "levelAll";

    const selectedDurations = getSelectedDurations();
    const selectedCategories = getCheckedValues(categoryCheckboxes, cb => cb.dataset.value);
    const selectedSoftware = getCheckedValues(softwareCheckboxes, cb => cb.dataset.value);
    const selectedLanguages = getCheckedValues(languageCheckboxes, cb => cb.dataset.value);

    const filtered = courses.filter(course => {
        if (course.rating < minRating) return false;

        if (selectedLevel !== 'levelAll' && course.level !== selectedLevel.replace('level', '')) return false;

        if (selectedDurations.length > 0 && !selectedDurations.some(([min, max]) => course.duration >= min && course.duration <= max)) return false;

        if (selectedCategories.length > 0 && !course.category.some(cat => selectedCategories.includes(cat))) return false;

        if (selectedSoftware.length > 0 && !(course.software || []).some(soft => selectedSoftware.includes(soft))) return false;

        if (selectedLanguages.length > 0 && !selectedLanguages.includes(course.language)) return false;

        return true;
    });


    searchCardsMap(filtered);
}

[ratingInputs, levelInputs, durationCheckboxes, categoryCheckboxes, softwareCheckboxes, languageCheckboxes].forEach(group => {
    group.forEach(el => el.addEventListener('change', applyFilters));
});


