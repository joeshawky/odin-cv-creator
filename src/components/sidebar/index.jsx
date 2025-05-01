import "./Sidebar.css";

export default function Sidebar({ children }) {
    console.log(children);
    return <div className="sidebar">{children}</div>;
}
