import food from '../jsonTemp/food.json'
import '../css/food.css'
import Navbar from '../comp/NavBar'
import Footer from '../comp/Footer'

export default function Food() {
    return <div>
        <Navbar />
        <div>
            {food.FoodInfo.map(food => (
                <div className='food-square'>
                    <h1 className='food-Header'>{food.name}</h1>
                    <p>
                        {food.info.map(item => (
                            <p>{item}</p>
                        ))}
                    </p>
                </div>
            ))}
        </div>

        {food.FoodMenu.map((Food, index) => (
            <div key={index}>
                <div className='food-square'>

                    <h1>{Food.name}</h1>

                    {Food.menu.map((menu, index) => (
                        <div className='text-food'>
                            <li key={index}>
                                <p>{menu}</p>

                            </li>
                        </div>
                    ))}

                </div>
            </div>


        ))}
        <Footer />
    </div>

}