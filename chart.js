function updateChart() {
    let moodCounts = {};
    moodData.forEach(entry => {
        moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
    });

    let labels = Object.keys(moodCounts);
    let counts = Object.values(moodCounts);

    new Chart(document.getElementById("moodChart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mood Frequency',
                data: counts,
                backgroundColor: ['#FFD700', '#1E90FF', '#808080', '#32CD32', '#FF4500']
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { display: false } 
            }
        }
    });
}

// Call it initially to render the chart
updateChart();
