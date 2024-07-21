import './Classes.css';
export default function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background
            </div>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow backgroud
            </div>
            <div className="wd-bg-blue wd-fg-white wd-padding-10px">
                Blue background
            </div>
            <div className="wd-bg-red wd-fg-white wd-padding-10px">
                Red background
            </div>
        </div>
    );
}