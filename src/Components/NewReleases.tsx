import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface NumerosTotales {
  numberItems: number;
}
interface AlbumStructure {
  title: string;
  artist: string;
  urlImage?: string;
  rating?: number;
}
const NewReleases = ({ numberItems }: NumerosTotales) => {
  const [newMusic, setNewMusic] = useState<AlbumStructure[]>([
    {
      title: "Titanic rising",
      artist: "Weyes Blood",
      urlImage:
        "https://indiehoy.com/wp-content/uploads/2019/02/weyes-blood-640-1.jpg",
    },
    {
      title: "Pang",
      artist: "Caroline Polachek",
      urlImage:
        "https://jenesaispop.com/wp-content/uploads/2019/10/caroline-polachek_pang.jpg",
    },
    {
      title: "Bloom",
      artist: "Beach House",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/en/a/a2/Beach_House_-_Bloom.png",
    },
    {
      title: "Never for Ever",
      artist: "Kate Bush",
      urlImage:
        "https://i.discogs.com/9K616GUMnTeueqUWhD5n07T4UQ-DukOvmY0qfUif-tQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2MTM5/MS0xNDA5NDQ5NjAy/LTc3NzAuanBlZw.jpeg",
    },
    {
      title: "LP1",
      artist: "FKA Twigs",
      urlImage: "https://m.media-amazon.com/images/I/51WZ3nIUSLL._SY355_.jpg",
    },
    { title: "Album 6", artist: "Artist 6" },
    { title: "Album 7", artist: "Artist 7" },
    { title: "Album 8", artist: "Artist 8" },
  ]);
  useEffect(() => {
    setNewMusic((arr) => arr.slice(0, numberItems));
  }, [numberItems]);
  return (
    <>
      <div className="contentainer-NewReleases">
        {newMusic.map((item) => (
          <NavLink
            key={item.title}
            className="defaultLink"
            to={`album/${item.title}`}
          >
            <div className="musicItem">
              <img src={item.urlImage} alt="" />
              <div className="row justify-content-between ms-0">
                <small className="col-12 title">{item.title}</small>
                <small className="col-12 artist">{item.artist}</small>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default NewReleases;
