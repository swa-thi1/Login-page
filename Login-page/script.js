document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Successfully submitted!\nYour form has been received.');
        // You can add AJAX or other logic here
    });
});