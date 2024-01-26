import PageBanner from '@/components/PageBanner'
import NavigationBar from '@/components/home/NavigationBar'
import HistoryContent from '@/components/about/history/HistoryContent'
import Apply from '@/components/academic/undergraduate/Apply'
import Footer from '@/components/home/Footer'
import SubLinks from '@/components/academic/undergraduate/SubLinks'
import Staff from '@/components/about/leadership/Staff'
import { ApplicationFormCTA } from '../components/about/layout'

const online_education = ()=> {
    return (
        <main>
            <NavigationBar/>
            <PageBanner title="Online Education"/>
            <HistoryContent heading="12" tagline="world-class online degree programs"/>
            <SubLinks title="Graduate Classes"/>
            <SubLinks title="Undergraduate Classes"/>
            <Apply/>
            
            <ApplicationFormCTA/>
            
        </main>
    )
}

export default online_education