"use client";

type GitHubuser = {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
};

import DarkAndLightBtn from "@/components/DarkAndLightBtn";
import SearchAndBtn from "@/components/SearchAndBtn";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import dateFormat from "dateformat";
import { useState } from "react";
export default function Home() {
  const [userName, setUserName] = useState("diyorb3k");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const { isLoading, error, data, refetch } = useQuery<GitHubuser>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://api.github.com/users/${userName}`).then((res) =>
        res.json()
      ),
  });
  console.log("data-", data);

  if (isLoading) return "Loading...";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refetch();
  }

  return (
    <div className="flex min-h-screen w-full light:bg-stone-100 dark:bg-slate-900 p-1.5 sm:p-4 pt-12 sm:pt-12 transition-all ">
      {/* container */}
      <div className="border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">diyorb3k</p>
          <DarkAndLightBtn />
        </section>

        {/* search section */}
        <section className="flex flex-col gap-6">
          <SearchAndBtn
            Onchange={(e) => setUserName(e.target.value)}
            onSubmit={handleSubmit}
            value={userName}
          />
          <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-900 px-4 py-8 min-h-[200px]">
            <section className="flex gap-4 w-full">
              <Image
                src={data?.avatar_url ?? ""}
                alt="user_img"
                width={200}
                height={200}
                className="h-20 w-20 rounded-full"
              />
              <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                <div>
                  <h1>{data?.name}</h1>
                  <Link
                    target="_blank"
                    className="text-blue-400 hover:underline text-sm transition-all"
                    href={`https://github.com/${data?.login}/`}
                  >
                    @{data?.login}
                  </Link>
                </div>
                <p>
                  Joined
                  <span>Joined</span>
                  <span>{dateFormat(data?.created_at, "dd mmm yyyy")}</span>
                </p>
              </section>
            </section>
            {/* 2sekt */}
            <section className="flex flex-col gap5 ">
              <p>
                {data?.bio ?? (
                  <span className="opacity-60">This profile has no bio</span>
                )}
              </p>
              <div className=" flex  justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900 min-h-[50px]">
                {/* iti,1 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Repos</p>
                  <p className="text-sm font-bold sm:text-base">
                    {data?.public_repos}
                  </p>
                </div>{" "}
                {/* iti,2 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Followers</p>
                  <p className="text-sm font-bold sm:text-base">
                    {data?.followers}
                  </p>
                </div>{" "}
                {/* iti,3 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Following</p>
                  <p className="text-sm font-bold sm:text-base">
                    {data?.following}
                  </p>
                </div>
              </div>
              {/* 1 */}
              <div className="flex ">
                <div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className=" flex gap-2 items-center">
                      <IoLocationOutline className="text-xl" />
                      <p>
                        {data?.location ?? (
                          <span className="opacity-60">Not Available</span>
                        )}{" "}
                        {""}
                      </p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className=" flex gap-2 items-center">
                      <IoIosLink className="text-xl" />
                      {(
                        <Link
                          title="data?.blog"
                          className="hover:underline opacity-60 max-w-[200px] overflow-hidden text-ellipsis"
                          href={data?.blog ?? "#"}
                        >
                          {data?.blog}
                        </Link>
                      ) ?? (
                        <span className="opacity-60">Not Available</span>
                      )}{" "}
                    </div>
                  </div>
                  {/* 3 */}
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className=" flex gap-2 items-center">
                      <FaTwitter className="text-xl" />
                      <p>
                        {data?.company ?? (
                          <span className="opacity-60">Not Available</span>
                        )}
                      </p>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className=" flex gap-2 items-center">
                      <BsFillBuildingsFill className="text-xl" />
                      <p>
                        {data?.company ?? (
                          <span className="opacity-60">Not Available</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}
