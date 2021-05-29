import { HomeComponent } from "../home/home.component";

export const MainRoutes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Add', loadChildren: () => import('../add-expense/add-expense.module').then(a => a.AddExpenseModule)},
    {path: 'Stats', loadChildren: () => import('../statistics/statistics.module').then(s => s.StatisticsModule)},
    {path: '', component: HomeComponent},
]