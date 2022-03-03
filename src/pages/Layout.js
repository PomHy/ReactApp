import { Outlet, Link } from "react-router-dom";



const Layout = () => {
return (
<>
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/About">Om Mig</Link>
</li>
<li>
<Link to="/Cv">Cv</Link>
</li>
<li>
<Link to="/Profile">Profile</Link>
</li>
</ul>
</nav>
<Outlet />
</>
);
};
export default Layout;