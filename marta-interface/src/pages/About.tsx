import { Link } from "react-router";
import MARTA from "../assets/MARTA.jpeg";

/*export default function About() {
    return (
        <>
            <div>
                <h1>About MARTA</h1>
                <Link to="/">Home</Link>
            </div>
            <div>
                <div>
                    <h3>Taken from Wikipedia</h3>
                    <p>The Metropolitan Atlanta Rapid Transit Authority (MARTA /ˈmɑːrtə/) is the principal public transport operator in the Atlanta metropolitan area. Formed in 1971 as strictly a bus system, MARTA operates a network of bus routes linked to a rapid transit system consisting of 48 miles (77 km) of rail track with 38 subway stations. MARTA's rapid transit system is the eighth-largest rapid transit system in the United States by ridership.</p>
                    <p>MARTA operates almost exclusively in Fulton, Clayton, and DeKalb counties, although they maintain bus service to two destinations in neighboring Cobb County, while Doraville station serves portions of Gwinnett County via Ride Gwinnett buses. MARTA also operates paratransit service for disabled customers and on-demand microtransit service for people in areas with first or last-mile issues within their neighborhood.</p>
                    <p>In 2025, the entire system (bus and subway lines) had 65,752,400 rides, or about 258,700 unlinked passenger boardings per weekday in the second quarter of 2026.</p>
                    <p>Expansion of the MARTA system stalled after the completion of three new rail stations in 2000. In 2016, Atlanta voters approved a historic sales tax increase to raise $2.7 billion over 40 years, in order to significantly expand the MARTA system (dubbed the More MARTA program), including 29 miles of light rail transit, 13 miles of bus rapid transit, arterial rapid transit, transit centers and multiple infill MARTA stations. Since its inception, the More MARTA program has been criticized for slow progress, delays, and reversals on executing its list of expansion projects.</p>
                </div>
                <div>
                    <img src={MARTA}/>
                </div>
            </div>
        </>
    )
}*/

export default function About() {
    return (
        <div className="min-h-screen bg-white text-black">
            <div>
            <div className="flex h-[120px] items-center justify-between border-b border-gray-300 px-8">
                <div className="w-1/3" />
                    <h1 className="text-6xl font-extrabold">About MARTA</h1>
                    <Link to="/" className="w-1/3 text-right text-2xl font-semibold">
                        Home
                    </Link>
                </div>
            </div>
            <div className="h-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-5 px-10 py-10">
                    <h3 className="italic">Taken from Wikipedia</h3>
                    <p>The Metropolitan Atlanta Rapid Transit Authority (MARTA /ˈmɑːrtə/) is the principal public transport operator in the Atlanta metropolitan area. Formed in 1971 as strictly a bus system, MARTA operates a network of bus routes linked to a rapid transit system consisting of 48 miles (77 km) of rail track with 38 subway stations. MARTA's rapid transit system is the eighth-largest rapid transit system in the United States by ridership.</p>
                    <p>MARTA operates almost exclusively in Fulton, Clayton, and DeKalb counties, although they maintain bus service to two destinations in neighboring Cobb County, while Doraville station serves portions of Gwinnett County via Ride Gwinnett buses. MARTA also operates paratransit service for disabled customers and on-demand microtransit service for people in areas with first or last-mile issues within their neighborhood.</p>
                    <p>In 2025, the entire system (bus and subway lines) had 65,752,400 rides, or about 258,700 unlinked passenger boardings per weekday in the second quarter of 2026.</p>
                    <p>Expansion of the MARTA system stalled after the completion of three new rail stations in 2000. In 2016, Atlanta voters approved a historic sales tax increase to raise $2.7 billion over 40 years, in order to significantly expand the MARTA system (dubbed the More MARTA program), including 29 miles of light rail transit, 13 miles of bus rapid transit, arterial rapid transit, transit centers and multiple infill MARTA stations. Since its inception, the More MARTA program has been criticized for slow progress, delays, and reversals on executing its list of expansion projects.</p>
                </div>
                <div className="min-w-1/2 flex-1 px-10 py-10">
                    <img src={MARTA}/>
                </div>
            </div>
        </div>
    );
}
