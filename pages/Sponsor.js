import '../css/sponsor.css'
import Navbar from '../comp/NavBar'
import SponsorData from '../jsonTemp/sponsorsInfo.json'
import Footer from '../comp/Footer'

function Sponsor() {

    return <div>
        <Navbar />
        <div className='sponsor-square'>

            <h1 className='sponsor-header'> Sponsorer</h1>
            {SponsorData.Sponsors.map((sponsor, index) => (
                <div key={index}>


                    <ul>
                        <p><a href={sponsor.homepage}>
                            <img src={sponsor.picture}  width="210" height="110" />
                        </a></p>
                    </ul>
                </div>
            ))}

        </div>
        <Footer/>
    </div>


}
export default Sponsor;