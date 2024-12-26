import "./styles.css";

import Header from "../../components/Header/index.jsx";
import {Sidebar} from "../../components/Sidebar/index.jsx";
import {Posts} from "../../components/Posts/index.jsx";

export default function Home() {
    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>

                <Sidebar/>
            </div>
        </>
    );
}
