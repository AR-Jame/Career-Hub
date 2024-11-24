import HeroImg from "../assets/images/user.png"
const Header = () => {
    return (
        <div className="bg-[#faf8ff]">
            <div className="flex flex-col lg:flex-row-reverse items-center mx-[5%] lg:mx-[10%]">
                <div>
                    <img src={HeroImg} />
                </div>
                <div>
                    <h1 className="text-7xl font-bold leading-tight">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-[#9f82ec] text-white font-semibold text-base">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;