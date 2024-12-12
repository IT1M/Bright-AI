        // التدفقات النقدية الشهرية
        const cashFlowCtx = document.getElementById('cashFlowChart').getContext('2d');
        new Chart(cashFlowCtx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
                datasets: [{
                    label: 'التدفقات النقدية',
                    data: [12000, 19000, 15000, 25000, 22000, 30000],
                    borderColor: '#1e3c72',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // توزيع النفقات
        const expensesCtx = document.getElementById('expensesChart').getContext('2d');
        new Chart(expensesCtx, {
            type: 'doughnut',
            data: {
                labels: ['رواتب', 'تسويق', 'معدات', 'إيجار', 'أخرى'],
                datasets: [{
                    data: [40, 20, 15, 15, 10],
                    backgroundColor: [
                        '#1e3c72',
                        '#2a5298',
                        '#3867c0',
                        '#4b7ee8',
                        '#6495ed'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // تحليل الأرباح والخسائر
        const profitLossCtx = document.getElementById('profitLossChart').getContext('2d');
        new Chart(profitLossCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'الأرباح',
                    data: [50000, 65000, 75000, 90000],
                    backgroundColor: '#1e3c72'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });