import { useDispatch } from "react-redux";
import { setScreen} from "../Utils/appSlice"


const Home = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div>Home Screen</div>
            <button onClick={() => dispatch(setScreen("Profile"))}>Profile</button>
        </>
        
    )
};

export default Home;