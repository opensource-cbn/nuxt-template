
export const  menu = () => {
    return [
        {
            text: 'Home',
            icon: 'ni ni-shop text-primary',
            route: '/admin/dashboard',
        },
        {
            text: 'Master',
            icon: 'el-icon-folder text-primary',
            children: [
                {
                    text: "Skill",
                    icon: 'el-icon-medal',
                    route: '/admin/master/kemampuan'
                },
            ]
        },
        {
            text: 'Administration',
            icon: 'el-icon-info text-primary',
            children: [
                {
                    text: 'API Logs',
                    icon: 'el-icon-notebook-2',
                    route: '/admin/administration/logs'
                },
                {
                    text: 'Mobile Device',
                    icon: 'el-icon-notebook-2',
                    route: '/admin/administration/mobile'
                },
            ]
        }
    ]
};
