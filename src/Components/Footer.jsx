import footerContact from "../Api/footerApi";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

export const Footer = () => {

    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <div className="footer-sec">
<div className="container footer-col">
                {
                    footerContact.map((curData, index) => {
                        const { icon, title, details } = curData;
                        return (
                            <div className="footer-contact" key={index}>
                                <div className="icon">{footerIcon[icon]}</div>
                                <div className="footer-contact-text">
                                    <span className="title1">{title}</span>
                                    <span className="label2">{details}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
