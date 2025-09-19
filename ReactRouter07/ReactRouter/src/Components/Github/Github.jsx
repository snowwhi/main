import { useEffect ,useState} from "react";

function Github() {
    const [data, setdata] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/snowhii')
            .then((response) => response.json())
            .then((data) => setdata(data));
    }, []);

    return (
        <>
            <div className="bg-gray-800 text-white text-2xl">
                <h1>Followers : {data.followers}</h1>
                <img src={data.avatar_url} alt="Image is loading
                " />
            </div>
        </>
    );
}

export default Github;