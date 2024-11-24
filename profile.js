document.addEventListener("DOMContentLoaded", () => {
    const profiles = document.querySelectorAll('.profile');
    const manageProfilesButton = document.querySelector('.manage-profiles');

    profiles.forEach(profile => {
        profile.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            selectProfile(profile);
        });
    });

    manageProfilesButton.addEventListener('click', manageProfiles);

    function selectProfile(profile) {
        const profileName = profile.getAttribute('data-name');
        alert(`You selected ${profileName}`);
        
        // Adding a smooth transition effect
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = 0; // Fade out effect

        // Wait for the fade out to finish before redirecting
        setTimeout(() => {
            window.location.href = profile.href; // Redirect to the profile page
        }, 500); // 500 milliseconds delay (same as the fade out duration)
    }

    function manageProfiles() {
        alert('Manage profiles functionality not implemented yet.');
        // Implement modal or redirect to manage profiles page here
    }
});