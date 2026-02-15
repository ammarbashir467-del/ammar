import { FaArrowRightLong } from "react-icons/fa6";

export const Contactt = () => {
    const formSubmit = (formData) => {
        console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };

    return (
        <div className="Contactt-bg">
            <h3 className="text3">Contact Us</h3>
            <div className="form-sec container">
                <form action={formSubmit} >
                    <input className="form1" type="Name" required autoComplete="off" placeholder="Enter your Name" name="Username" />

                    <input className="form2" type="Email" required autoComplete="off" placeholder="Enter your Email" name="Email" />


                    <textarea className="form3" name="message" placeholder="Enter your message" rows="5" autoComplete="off"></textarea>

                    <div className="btn-sec1">
                    <button type="submit" class="btn btn2 btn-outline-secondary">Send <FaArrowRightLong size={25} style={{ paddingLeft: 10, }} />
                    </button>

                </div>
                </form>
            </div>


        </div>
    );
}