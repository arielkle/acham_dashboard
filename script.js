// Tab functionality
function showTab(tabName) {
    // Hide all tabs
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');
    
    tabContents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Chart.js configurations
Chart.defaults.font.family = 'Arial';
Chart.defaults.font.size = 14;

// Safe Climate Chart
const safeClimateCtx = document.getElementById('safeClimateChart').getContext('2d');
new Chart(safeClimateCtx, {
    type: 'bar',
    data: {
        labels: ['יחסים חיוביים', 'מסוגלות עצמית'],
        datasets: [{
            label: 'כלל התלמידים',
            data: [3.86, 3.45],
            backgroundColor: ['rgba(52, 152, 219, 0.8)', 'rgba(155, 89, 182, 0.8)'],
            borderColor: ['rgba(52, 152, 219, 1)', 'rgba(155, 89, 182, 1)'],
            borderWidth: 2
        }, {
            label: 'תלמידים',
            data: [4.03, 3.62],
            backgroundColor: 'rgba(46, 204, 113, 0.6)',
            borderColor: 'rgba(46, 204, 113, 1)',
            borderWidth: 2
        }, {
            label: 'תלמידות',
            data: [3.70, 3.29],
            backgroundColor: 'rgba(231, 76, 60, 0.6)',
            borderColor: 'rgba(231, 76, 60, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'השוואת מדדי אקלים בטוח'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 5
            }
        }
    }
});

// Violence Chart
const violenceCtx = document.getElementById('violenceChart').getContext('2d');
new Chart(violenceCtx, {
    type: 'doughnut',
    data: {
        labels: ['אלימות', 'פגיעה ברשת', 'הטרדה מינית', 'התנהגויות סיכון'],
        datasets: [{
            data: [1.14, 1.08, 1.07, 2.76],
            backgroundColor: [
                'rgba(46, 204, 113, 0.8)',
                'rgba(52, 152, 219, 0.8)',
                'rgba(155, 89, 182, 0.8)',
                'rgba(231, 76, 60, 0.8)'
            ],
            borderColor: [
                'rgba(46, 204, 113, 1)',
                'rgba(52, 152, 219, 1)',
                'rgba(155, 89, 182, 1)',
                'rgba(231, 76, 60, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'התפלגות מדדי אלימות (ציון נמוך = מצב טוב)'
            }
        }
    }
});

// Protection Chart
const protectionCtx = document.getElementById('protectionChart').getContext('2d');
new Chart(protectionCtx, {
    type: 'radar',
    data: {
        labels: ['מסוגלות המורים לטפל', 'פנייה לעזרה', 'תחושת מוגנות'],
        datasets: [{
            label: 'תלמידים',
            data: [3.11, 3.53, 3.71],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            pointBackgroundColor: 'rgba(52, 152, 219, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
        }, {
            label: 'תלמידות',
            data: [2.89, 3.21, 3.52],
            backgroundColor: 'rgba(233, 30, 99, 0.2)',
            borderColor: 'rgba(233, 30, 99, 1)',
            pointBackgroundColor: 'rgba(233, 30, 99, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(233, 30, 99, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'השוואת מדדי מוגנות בין מינים'
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 5
            }
        }
    }
});

