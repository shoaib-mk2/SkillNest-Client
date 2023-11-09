
const GotAQuestion = () => {
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(/gotaques_img.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Got a Question?</h1>
                        <p className="mb-5">We’re here to help. Check out our FAQs, send us an email or call us at 1 (800) 555-5555</p>
                        <button className="btn bg-lime-600 text-white hover:text-black w-1/2 text-lg border-none">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GotAQuestion;