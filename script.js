function showAlert(message) {
    alert(message);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

console.log("Welcome to the Introduction to Programming page!");
