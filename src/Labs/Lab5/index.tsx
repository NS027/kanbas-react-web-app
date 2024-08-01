import EncodingParametersinURLs from "./EncodingParametersinURLs";
import EnvironmentVariables from "./EnvironmentVariables";

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href="http://localhost:4000/lab5"
                    className="list-group-item">
                    Welcome
                </a>
            </div><hr />
            <EnvironmentVariables />
            <h2>Calculator</h2>
            <EncodingParametersinURLs />
        </div>
    );
}