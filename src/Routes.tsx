import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Main from './features/main/components/Main'
import Home from './features/home/components/Home'
import About from './features/about/components/About'
import Transporting from './features/services/transporting/components/Transporting'
import Contacts from './features/contacts/components/Contacts'
import Blog from './features/blog/components/Blog'
import Incomterms from './features/incoterms/components/Incomterms'
import Agency from './features/services/agency/components/Agency'
import Consaltancy from './features/services/conaltancy/components/Consaltancy'
import Cleaning from './features/services/cleaning/components/Cleaning'
import Transportation from './features/services/transporting/components/Transportation'
import Highway from './features/services/transporting/components/Highway'
import Maritime from './features/services/transporting/components/Maritime'
import Airways from './features/services/transporting/components/Airways'
import Railway from './features/services/transporting/components/Railway'
import Warehouse from './features/services/warehouse/components/Warehouse'
import Notification from './features/notifications/components/Notifications'
import MultiModal from './features/services/transporting/components/MultiModal'
import PartialShipping from './features/services/transporting/components/PartialShipping'
import SpecialShipping from './features/services/transporting/components/SpecialShipping'
import Insurance from './features/services/insurance/components/Insurance'

const Routes = () => (
  <BrowserRouter>
    <Notification/>
    <RouterRoutes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="blog/incoterms" element={<Incomterms/>}/>
        <Route path="transporting" element={<Transporting/>}>
          <Route index element={<Transportation/>}/>
          <Route path="highway" element={<Highway/>}/>
          <Route path="maritime" element={<Maritime/>}/>
          <Route path="airways" element={<Airways/>}/>
          <Route path="railway" element={<Railway/>}/>
          <Route path="multimodal" element={<MultiModal/>}/>
          <Route path="partial" element={<PartialShipping/>}/>
          <Route path="specialShipping" element={<SpecialShipping/>}/>
        </Route>
        <Route path="insurance" element={<Insurance/>}/>
        <Route path="agency" element={<Agency/>}/>
        <Route path="consultancy" element={<Consaltancy/>}/>
        <Route path="cleaning" element={<Cleaning/>}/>
        <Route path="warehouse" element={<Warehouse/>}/>
      </Route>
    </RouterRoutes>
  </BrowserRouter>
)

export default Routes
