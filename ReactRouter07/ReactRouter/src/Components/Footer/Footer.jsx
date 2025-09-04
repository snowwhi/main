import {Link} from "react-router"
function Footer() {
    return (< >
    <footer className="relative bg-white">
        <div className=" static bottom-0 flex flex-wrap justify-around content-center shadow  border-gray-200 border-2 w-full font-medium">
            <div className=" flex flex-wrap flex-col justify-around">
            <img src="https://www.shutterstock.com/image-vector/cute-penguin-wearing-pink-backpack-600nw-2594168049.jpg" alt="logo" 
            className="h-32 w-32 rounded-full" />
            </div>
            <div className="flex flex-wrap flex-col justify-around">
                <h3 className="text-orange-700 text-xl">Products</h3>
                <Link>Competition</Link>
                <Link>NoteBook</Link>
                <Link>Discussion</Link>
            </div>
            <div className=" flex flex-wrap flex-col justify-around">
                 <h3  className="text-orange-700 text-xl">Documentation</h3>
                <Link>Api</Link>
                <Link>Models</Link>
                <Link>Datasets</Link>
            </div>
            <div className="flex flex-wrap flex-col justify-around ">
                 <h3  className="text-orange-700 text-xl">Company</h3>
                <Link>Contact-us</Link>
                <Link>Reviews</Link>
                <Link>Privacy policy</Link>
            </div>
        </div>
    </footer>
    </>  );
}

export default Footer;