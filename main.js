// Sample data (replace with actual data from your database)
const researchers = [
    { name: 'Dr. John Doe', expertise: ['Renewable Energy', 'Climate Change'], sdgContributions: [1, 7], projects: ['Project A', 'Project B'] },
    // Add more researcher objects as needed
];

function searchResearchers() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultsSection = document.getElementById('results-section');
    
    // Clear previous results
    resultsSection.innerHTML = '';

    // Filter researchers based on search input
    const filteredResearchers = researchers.filter(researcher =>
        researcher.name.toLowerCase().includes(searchInput) ||
        researcher.expertise.some(field => field.toLowerCase().includes(searchInput)) ||
        researcher.projects.some(project => project.toLowerCase().includes(searchInput))
    );

    // Display results
    filteredResearchers.forEach(researcher => {
        const researcherCard = document.createElement('div');
        researcherCard.classList.add('researcher-card');
        researcherCard.innerHTML = `
            <h2>${researcher.name}</h2>
            <p>Expertise: ${researcher.expertise.join(', ')}</p>
            <p>SDG Contributions: ${researcher.sdgContributions.join(', ')}</p>
            <p>Projects: ${researcher.projects.join(', ')}</p>
        `;
        resultsSection.appendChild(researcherCard);
    });
}
