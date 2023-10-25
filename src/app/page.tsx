"use client";
import Modal from "@/components/Modal";
import Searchbar from "@/components/Searchbar";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("ps5");
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(process.env);
  const handleSearch = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GHIPY_API}&q=${search}&limit=30&offset=0`
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <div>loading...</div>;

  return (
    <main className="flex flex-col items-center p-24 bg-zinc-950 space-y-6">
      <Searchbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {modalImage.images && <Modal url={modalImage.images.original.url} />}

      <div className="grid lg:grid-cols-6 grid-flow-row gap-4 md:grid-cols-3 grid-cols-1">
        {images.length &&
          images.map((image: any) => (
            <img
              key={image.id}
              className="rounded h-40 w-full"
              src={image.images.original.url}
              onClick={() => {
                console.log(image);
                setModalImage(image);
              }}
            ></img>
          ))}
      </div>
    </main>
  );
}
