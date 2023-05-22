export default{
    sideBarIcon: [
        {
            link: '',
            href: '#sidebarDashboards'
            ,menuValue: 'sidebarDashboards',
            icon: 'las la-tachometer-alt'
        },
        {
            link: '',
            href: '#homeDashborad'
            ,menuValue: 'homeDashborad',
            icon: 'las la-tachometer-alt'
        },
        {
            link: '',
            href: '#sidebarApps'
            ,menuValue: 'sidebarApps',
            icon: 'lab la-delicious'
        },
        {
            link: '',
            href: '#sidebarAuth'
            ,menuValue: 'sidebarAuth',
            icon: 'lar la-user-circle'
        },
        {
            link: '',
            href: '#sidebarPages'
            ,menuValue: 'sidebarPages',
            icon: 'las la-pager'
        },
        {
            link: '',
            href: '#sidebarlanding'
            ,menuValue: 'sidebarlanding',
            icon: 'ri-rocket-line'
        },
        {
            link: '',
            href: '#sidebarUI'
            ,menuValue: 'sidebarUI',
            icon: 'las la-pencil-ruler'
        },
        {
            link: '',
            href: '#sidebarAdvanceUI'
            ,menuValue: 'sidebarAdvanceUI',
            icon: 'las la-briefcase'
        },
        {
            link: '',
            href: '#sidebarForms'
            ,menuValue: 'sidebarForms',
            icon: 'lar la-newspaper'
        },
        {
            link: '',
            href: '#sidebarTables'
            ,menuValue: 'sidebarTables',
            icon: 'las la-table'
        },
        {
            link: '',
            href: '#sidebarCharts'
            ,menuValue: 'sidebarCharts',
            icon: 'las la-chart-pie'
        },
        {
            link: '',
            href: '#sidebarIcons'
            ,menuValue: 'sidebarIcons',
            icon: 'lab la-fonticons'
        },
        {
            link: '',
            href: '#sidebarMaps'
            ,menuValue: 'sidebarMaps',
            icon: '"las la-map'
        },
        {
            link: '',
            href: '#sidebarMultilevel'
            ,menuValue: 'sidebarMultilevel',
            icon: 'las la-folder-plus'
        },
        {

            link: '/widgets',
            href: ''
            ,menuValue: '',
            icon: 'las la-flask'
        },
    ]
    ,
    sideBarList: [
        {
            id:'sidebarApps',
            list: [
                {
                    link: '/calendar',
                    id: '',
                    value: '',
                    datakey: 't-calendar',
                    t:'t-calendar',
                    list: [],
                },
                {   
                    id: '#sidebaremail',
                    value: 'sidebaremail',
                    link: '',
                    datakey: 't-projects',
                    t: 't-email',
                    list: [
                        {   
                            id: '#sidebarsubemail',
                            value: 'sidebarsubemail',
                            datakey: 't-projects',
                            t: 't-email-templates',
                            link: '',
                            list: [
                                {   
                                    link:'/email/email-basic',
                                    datakey: 't-products',
                                    t: 't-basic-action',
                                },
                                {   
                                    link:'/email/email-ecommerce',
                                    datakey: 't-products',
                                    t: 't-ecommerce-action',
                                },
                            ]
                        },
                        {
                            id: '',
                            value: '',
                            list: [],
                            link: '/mailbox',
                            datakey: 't-mailbox',
                            t: 't-mailbox'
                        }
                    ]
                }
            ]
        },
        {
            id: 'homeDashborad',
            list: [
                {
                    link: '/dashboard/dashboard-overview',
                    id: '',
                    value: '',
                    datakey: 't-dashboard-overview',
                    t:'t-dashboard-overview',
                    list: [],
                },
                {
                    link: '/dashboard/dashboard-by-service',
                    id: '',
                    value: '',
                    datakey: 't-dashboard-by-service',
                    t:'t-dashboard-by-service',
                    list: [],
                },
                {
                    link: '/dashboard/dashboard-by-contract',
                    id: '',
                    value: '',
                    datakey: 't-dashboard-by-contract',
                    t:'t-dashboard-by-contract',
                    list: [],
                },
              
            ]
        }
    ]
}