import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
            src="https://cdn.vox-cdn.com/thumbor/q36EveXjJuJBdml_66ft9ZWBixs=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/72510683/BG3_CityReveal_00.0.png"
            alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="potsCat">Music </span>                
                <span className="potsCat">Life </span>                
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Reprehenderit possimus ullam facere
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum laboriosam totam consequuntur, reiciendis corporis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
    </div>
  )
}
