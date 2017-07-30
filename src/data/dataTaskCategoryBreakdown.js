module.exports = [
    {
        category: {
            name: 'new installation'
        },
        subCategories: [
            {
                category: {
                    name: 'new installations decoder',
                    style: 'install_decoder',
                    shortName: 'decoder'
                },
                reported: '1 every minute',
                completed: '1 every 20 minutes',
                percentage: 25
            },
            {
                category: {
                    name: 'new installations antenna / signal',
                    style: 'install_antena',
                    shortName: 'antena/signal'
                },
                reported: '1 every hour',
                completed: '1 every hour',
                percentage: 45
            },
            {
                category: {
                    name: 'new installations other / error',
                    style: 'install_error',
                    shortName: 'other/error'
                },
                reported: '1 every 2 hours',
                completed: '1 every 25 minutes',
                percentage: 30
            }
        ]
    },
    {
        category: {
            name: 'repair installation'
        },
        subCategories: [
            {
                category: {
                    name: 'repair installations decoder',
                    style: 'repair_install_decoder',
                    shortName: 'decoder'
                },
                reported: '1 every 10 days',
                completed: '1 every 5 days',
                percentage: 25
            },
            {
                category: {
                    name: 'repair installations antenna / signal',
                    style: 'repair_install_antena',
                    shortName: 'antena/signal'
                },
                reported: '1 every 30 days',
                completed: '1 every 15 days',
                percentage: 35
            },
            {
                category: {
                    name: 'repair installations other / error',
                    style: 'repair_install_error',
                    shortName: 'other/error'
                },
                reported: '1 every 6 days',
                completed: '1 every 7 days',
                percentage: 40
            }
        ]
    }

];

