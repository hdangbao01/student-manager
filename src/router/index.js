import HomePage from "@/pages/HomePage.vue"
import StudentPage from "@/pages/StudentPage.vue"
import AddPage from "@/pages/AddPage.vue"     
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import DetailPage from "@/pages/DetailPage.vue"

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomePage
            },
            {
                path: '/students',
                name: 'list student',
                component: StudentPage
            },
            {
                path: '/add-student',
                name: 'add student',
                component: AddPage
            },
            {
                path: '/student/:id',
                name: 'detail student',
                component: DetailPage
            },
        ]
    },
]

export default routes