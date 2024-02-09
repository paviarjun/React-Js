import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT US</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className="topImg"
            src="data:image/png;base64,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"
            // src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="" srcset="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
