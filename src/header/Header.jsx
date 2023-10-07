import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm" >React & Node </span>
          <span className="headerTitleLg">Blog </span>
        </div>
        <img className="headerImg" 
        src="https://dotesports.com/wp-content/uploads/2023/08/baldurs-gate-3-party.png?w=1200" 
        alt="" />
    </div>
  )
}
