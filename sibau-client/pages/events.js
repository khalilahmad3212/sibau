import PageBanner from '@/components/PageBanner'
import NavigationBar from '@/components/home/NavigationBar'
import EventsList from '@/components/events/EventsList'
import EventListV from '@/components/events/EventListV'

import { ApplicationFormCTA, AboutContent } from '../components/about/layout'

const faculty = ()=> {
    return (
        <main>
            <NavigationBar/>
            <PageBanner title="Events"/>
            <AboutContent />
            <EventsList/>
            <EventListV/>
            {/* <ApplicationFormCTA/> */}
            
        </main>
    )
}

export default faculty