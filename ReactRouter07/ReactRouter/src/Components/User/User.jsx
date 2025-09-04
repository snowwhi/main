import { useParams } from "react-router";
function User() {
    const {userid}=useParams
    return (<>
    <div className="items-center">  User :{userid} </div>
    </>  );
}

export default User;