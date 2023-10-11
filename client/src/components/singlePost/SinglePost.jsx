import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2023/08/Radio-Times-How-to-get-a-powerful-Baldurs-Gate-3-sword-early-in-the-game-4076f99.jpg?quality=90&resize=980,654"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Baris</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          doloremque asperiores impedit neque fugiat, corrupti vitae fugit
          repellendus? Animi mollitia excepturi eveniet quaerat, maiores hic
          molestiae, culpa doloremque voluptas aliquid ipsum quasi ea aspernatur
          debitis ipsa! Minus quibusdam corrupti fuga pariatur nihil incidunt
          obcaecati cupiditate! Totam ducimus necessitatibus cum magni deleniti
          eligendi veritatis recusandae commodi voluptatem facilis sequi
          possimus incidunt illo aperiam ullam numquam maxime dignissimos
          voluptate in , laboriosam accusamus aut. Numquam obcaecati laborum
          eligendi in fugit, nostrum sapiente cumque veritatis! Suscipit, ipsum,
          placeat officiis nemo veritatis iure numquam minima ullam modi,
          mollitia nam id ratione sapiente. Amet, alias labore.molestiae, culpa
          doloremque voluptas aliquid ipsum quasi ea aspernatur debitis ipsa!
          Minus quibusdam corrupti fuga pariatur nihil incidunt obcaecati
          cupiditate! Totam ducimus necessitatibus cum magni deleniti eligendi
          veritatis recusandae commodi voluptatem facilis sequi possimus
          incidunt illo aperiam ullam numquam maxime dignissimos voluptate in ,
          laboriosam accusamus aut. Numquam obcaecati laborum eligendi in fugit,
          nostrum sapiente cumque veritatis! Suscipit, ipsum, placeat officiis
          nemo veritatis iure numquam minima ullam modi, mollitia nam id ratione
          sapiente. Amet, alias labore.molestiae, culpa doloremque voluptas
          aliquid ipsum quasi ea aspernatur debitis ipsa! Minus quibusdam
          corrupti fuga pariatur nihil incidunt obcaecati cupiditate! Totam
          ducimus necessitatibus cum magni deleniti eligendi veritatis
          recusandae commodi voluptatem facilis sequi possimus incidunt illo
          aperiam ullam numquam maxime dignissimos voluptate in , laboriosam
          accusamus aut. Numquam obcaecati laborum eligendi in fugit, nostrum
          sapiente cumque veritatis! Suscipit, ipsum, placeat officiis nemo
          veritatis iure numquam minima ullam modi, mollitia nam id ratione
          sapiente. Amet, alias labore.
        </p>
      </div>
    </div>
  );
}
