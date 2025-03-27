import "./AboutUs.css";
import FirstImage from "../../assets/CarImages/mustangs-1.jpg";
import SecondImage from "../../assets/CarImages/mustangs-2.jpg";
import ThirdImage from "../../assets/CarImages/mustangs-3.jpg";

export function AboutUs () {

    return (
        <section className="about-us">
            <h2>About Us</h2>
            <div className="about-us-content">
                <p>OverSpeed Rentals is a car rental company that offers a wide range of vehicles to choose from. We have a variety of cars, SUVs, and trucks available for rent. Our goal is to provide our customers with the best possible service and make their car rental experience as easy and convenient as possible. We offer competitive rates and flexible rental terms to meet the needs of our customers. Whether you need a car for a day, a week, or longer, we have the perfect vehicle for you. Contact us today to learn more about our car rental services and to reserve your vehicle.</p>

                <div className="images-container">
                    <div className="image-div">
                        <img src={FirstImage} alt="Rental Image" />
                    </div>
                    <div className="image-div">
                        <img src={SecondImage} alt="Rental Image" />
                    </div>
                    <div className="image-div">
                        <img src={ThirdImage} alt="Rental Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}