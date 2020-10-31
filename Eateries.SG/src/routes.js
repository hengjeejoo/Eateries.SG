import CurrentBookings from './components/CurrentBookings.vue'
import PartnerEateries from  './components/PartnerEateries.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Declaration from './components/Declaration.vue'
import History from './components/History.vue'

export default[
    {path:'/currentbookings',component:CurrentBookings},
    {path:'/partnereateries',component:PartnerEateries},
    {path:'/',component:Home},
    {path:'/profile',component:Profile},
    {path:'/declaration',component:Declaration},
    {path:'/History',component:History}
]