import {Banner} from "./bannner/Banner";
import {WinsBanner} from "./winsBanner/WinsBanner";
import {AboutCard} from "./AboutCard";
import {ExperienceBanner} from "./experience/ExperienceBanner";

export const Home = () => {
    return (
        <main>
            <Banner />
            <WinsBanner />
            <AboutCard />
            <div className="mt-5">
            <ExperienceBanner />
            </div>
        </main>
    )
}