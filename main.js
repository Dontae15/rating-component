
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ratingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const rating = formData.get('rating');
    
        if(rating) {
            const messageElement = document.getElementById('rating-message');
            messageElement.textContent = `Thank you! You selected ${rating} out of 5!`;
            document.getElementById('rating-component').classList.toggle('active');
            document.getElementById('thanks-container').classList.toggle('active');
        } else {
            alert('Please select a rating');
        }
    
    });
});

