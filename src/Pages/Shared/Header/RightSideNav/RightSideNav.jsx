import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from "../../../../assets/qZone1.png"
import qZone2 from "../../../../assets/qZone2.png"
import qZone3 from "../../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            {/* Login Method */}
            <div>
                <h3 className="font-semibold text-2xl px-4 mb-4">Login With</h3>
                <button className="btn btn-wide my-2 ml-6">
                <FaGoogle></FaGoogle>
                     Login with Google
                </button>
                <button className="btn btn-wide my-2 ml-6">
                <FaGithub></FaGithub>
                     Login with Github
                </button>
            </div>
            {/* Social Media */}
            <div>
            <h3 className="font-semibold text-2xl px-4 mt-4">Find Us On</h3>
                <div className="p-4">
                    <a className="border rounded-t-md  flex items-center p-4" href="/"><FaFacebook className="mr-4 text-xl"></FaFacebook> Facebook</a>
                    <a className="border flex items-center p-4" href="/"><FaInstagram className="mr-4 text-xl"></FaInstagram> Instagram</a>
                    <a className="border rounded-b-md  flex items-center p-4" href="/"><FaTwitter className="mr-4 text-xl"></FaTwitter> Twitter</a>
                    
                </div>
            </div>
            {/* QZone */}
            <div className="p-4">
            <h3 className="font-semibold text-2xl px-4 mt-4">QZone</h3>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;