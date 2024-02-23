"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";s
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { getCharacterById } from "@/app/api/characters";
import { getEpisodesFromUrls } from "@/app/api/episodes";
import { ICharacter } from "@/types/character";
import { Episode } from "@/types/episode";
import NotesForm from "@/components/NotesForm";

const Character = ({ params }: { params: { id: string } }) => {
  const [character, setCharacter] = useState<ICharacter>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchCharacterData = async () => {
      const characterId = params.id;
      const characterData = await getCharacterById(characterId);
      setCharacter(characterData);
    };

    const fetchEpisodesData = async () => {
      if (character && character.episode) {
        const episodesData = await getEpisodesFromUrls(character.episode);
        setEpisodes(episodesData);
      }
    };

    fetchCharacterData();
    fetchEpisodesData();
  }, [character, params.id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full min-h-screen px-20 py-10">
      <div className="flex flex-col">
        <div className="flex gap-10 py-5">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            priority
          />
          <div>
            <h1 className="text-2xl">{character.name}</h1>
            <div>
              <div className="flex items-center mt-3">
                <span className="flex items-center w-20">
                  <i className="mr-1">
                    <MdMonitorHeart size={20} />
                  </i>
                  Status
                </span>
                <span className="ml-3">{character.status}</span>
              </div>
              <div className="flex items-center mt-3">
                <span className="flex items-center w-20">
                  <i className="mr-1">
                    <GiPlantsAndAnimals size={20} />
                  </i>
                  Species
                </span>
                <span className="ml-3">{character.species}</span>
              </div>
              <div className="flex items-center mt-3">
                <span className="flex items-center w-20">
                  <i className="mr-1">
                    <FaTag size={20} />
                  </i>
                  Type
                </span>
                <span className="ml-3">{character.type || "---"}</span>
              </div>
              <div className="flex items-center mt-3">
                <span className="flex items-center- w-20">
                  <i className="mr-1">
                    {" "}
                    <PiGenderIntersexBold size={20} />
                  </i>
                  Gender
                </span>
                <span className="ml-3">{character.gender}</span>
              </div>
              <div className="flex items-center mt-3">
                <span className="flex items-center w-20">
                  <i className="mr-1">
                    <FaGlobe size={20} />
                  </i>
                  Origin
                </span>
                <span className="ml-3">{character.origin.name}</span>
              </div>
              <div className="flex items-center mt-3">
                <span className="flex items-center w-20">
                  <i className="mr-1">
                    <FaMapMarkerAlt size={20} />
                  </i>
                  Location
                </span>
                <span className="ml-3">{character.location.name}</span>
              </div>
              <div className="flex items-center mt-3">
                <span className="flex items-center w-20">
                  <i className="mr-1">
                    <FaRegCalendarAlt size={20} />
                  </i>
                  Created
                </span>
                <span className="ml-3">
                  {new Date(character.created).toLocaleString()}
                </span>
              </div>
              <div className="flex mt-8 w-40">
                <button
                  onClick={openModal}
                  className="flex w-full bg-primary text-whiten font-semibold p-4 rounded-md justify-center items-center"
                >
                  Add Notes
                </button>
                <NotesForm isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <h3 className="text-2xl">Episodes</h3>
          <div>
            {episodes.map((episode) => (
              <div key={episode.id} className="flex items-center mt-3">
                <div>
                  <PiTelevisionSimpleBold size={30} />
                </div>
                <div>
                  <Link
                    href={`/episodes/${episode.id}`}
                    className="flex text-primary ml-5"
                  >
                    {episode.episode} - {episode.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Character;
