function openModal() {
    const modal = document.getElementById('warningModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('warningModal');
    modal.style.display = 'none';
}

function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        openModal();
    } else {
        closeModal();
    }
}

checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);