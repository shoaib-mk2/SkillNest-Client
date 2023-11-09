
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/banner_bg_img.png')] text-white">
            <div className="flex w-4/5 justify-between items-center flex-col lg:flex-row-reverse">
                <img src="/banner_img.png" className="lg:w-1/2" />
                <div className="py-10">
                    <h1 className="text-5xl font-bold">Explore Your Career Opportunities</h1>
                    <p className="py-6">Welcome to <span className="text-xl font-semibold italic">Skill Nest</span> <br /> Discover Your Perfect Job Match <br /> Where Skills Meet Opportunities</p>
                    <button className="btn bg-lime-600 text-white hover:text-black w-1/2 text-lg border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;