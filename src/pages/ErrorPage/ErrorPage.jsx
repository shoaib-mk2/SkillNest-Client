import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* <h1 className="text-6xl mb-4 font-bold">404</h1>
            <p className="text-lg mb-8">Oops! Page not found.</p> */}
            <img src="/404.jpg" className="rounded-full w-1/3" alt="" />
            <Link className="btn bg-lime-600 text-white hover:text-black w-1/2 text-lg border-none" to={'/'}>Go to HOME</Link>
        </div>
    );
};

export default ErrorPage;
