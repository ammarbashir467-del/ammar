import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Hero({setPage}) {

    const navigate = useNavigate();

    return (
        <>
            <div className="hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="heading1">
                                Explore the world, One country at a time
                            </h1>

                            <p className="pragraph">
                                Discover the history,culture and beauty of every nation.Sort,Search and filter through countries to find the details and you need.
                            </p>
                            <div className="btn-sec">
                                <button 
                                    type="button" 
                                    class="btn btn1 btn-outline-secondary"
                                    onClick={() =>{
                                        setPage('About')
                                        console.log('click');
                                        
                                         navigate('/about')
                                        }}
                                >
                                    Start Exploring <FaArrowRightLong size={25} style={{paddingLeft: 10, }} />
                                </button>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={require('../Assets/image.png')} alt="" className="img1" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;