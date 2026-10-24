import MARTA from "../assets/MARTA.jpeg"
import { Link } from "react-router"

export default function Home() {
    return (
    <div className="min-h-screen bg-white text-black">
    <div className="flex h-[120px] items-center justify-between border-b border-gray-300 px-8">
        <div className="w-1/3" />
            <h1 className="text-6xl font-extrabold">MARTA</h1>
            <Link to="/about" className="w-1/3 text-right text-2xl font-semibold">
                About MARTA
            </Link>
        </div>
        <div className="flex min-h-[calc(100vh-120px)] items-center gap-10 px-[4.5%] py-12">
            {/* Route links */}
            <div className="w-[35%] shrink-0">
                <h2 className="mb-10 text-5xl font-extrabold">
                    VIEW ROUTES SCHEDULE
                </h2>
                <div className="flex flex-col">
                    <Link to="/lines/GOLD" className="border-b-2 border-gray-700 py-3 text-2xl">
                        Gold Line
                    </Link>
                    <Link to="/lines/RED" className="border-b-2 border-gray-700 py-3 text-2xl">
                        Red Line
                    </Link>
                    <Link to="/lines/GREEN" className="border-b-2 border-gray-700 py-3 text-2xl">
                        Green Line
                    </Link>
                    <Link to="/lines/BLUE" className="border-b-2 border-gray-700 py-3 text-2xl">
                        Blue Line
                    </Link>
                </div>
            </div>
            <div className="flex-1">
                <img src={MARTA}/>
            </div>
        </div>
        </div>
    );
}