import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/Header/RightSideNav/RightSideNav";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className="w-[1450px] mx-auto">
           <Header></Header>
           <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6  mx-auto ">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border ">
                    News Coming Soon!!!
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;