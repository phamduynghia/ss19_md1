document.getElementById('hide-btn').addEventListener('click', function () {
    document.getElementById('hidden-text').classList.add('hidden');
});

document.getElementById('show-btn').addEventListener('click', function () {
    document.getElementById('hidden-text').classList.remove('hidden');
});