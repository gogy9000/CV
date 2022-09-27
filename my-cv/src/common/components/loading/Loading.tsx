//import style from './Loading.css'
import './Loading.css'

export const Loading = () => {
    return (
        <div className="loaderContainer">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}