import "./footer.css"

export default function Footer() {
  return (
    <div className='foot'>
        {/* <div className="footLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div> */}
        <div className="footCenter">
            <ul className="footList">
                <li className="footListItem">Contact us</li>
                <li className="footListItem">About US</li>
                <li className="footListItem">Blog</li>
            </ul>
        </div>
    </div>
  )
}
