/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useGetAllPostQuery, useGetTotalPostDocumentQuery } from "@/redux/features/post/postApi";
import { Tpost } from "@/types";
import React, { useState, useEffect } from "react";
import PostDetails from "../posts/PostDetails";
import { useInView } from "react-intersection-observer";
import { Divider, Spinner } from "@nextui-org/react";
import Container from "@/components/shared/Container/Container";
import NewsFeedLeft from "./NewsFeedLeft";
import { useLocalUser } from "@/context/user.Provider";
import { useGetPostByUserIdQuery } from "@/redux/features/post/postApi";
import Link from "next/link";
import EachPopularPost from "../home/EachPopularPost";
import NoDataFound from "@/components/shared/NotDataFound";

const NewsFeed = () => {
  const [limit, setLimit] = useState<number>(1); // Start by loading 1 post
  const { data, isFetching, isLoading } = useGetAllPostQuery({ limit });
  const { ref: inViewRef, inView } = useInView();
  const { data: totalPost } = useGetTotalPostDocumentQuery({});
  const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);
  const { user } = useLocalUser();
  const { data: posts  } = useGetPostByUserIdQuery(`${user?._id}`);

  // When inView changes (user scrolls to the bottom), increment the limit to load another post
  useEffect(() => {
    if (inView && !allPostsLoaded && !isFetching) {
      if (data?.data?.length === totalPost?.data) {
        setAllPostsLoaded(true); // All posts have been loaded
      } else {
        setLimit((prevLimit) => prevLimit + 1); // Increase the limit to load the next post
      }
    }
  }, [inView, isFetching, data, allPostsLoaded]);

  return (
    <Container className="px-0">
      <>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div className="flex md:px-6 gap-4 px-3">
            <div className="h-screen overflow-auto hidden md:block">
              <NewsFeedLeft />
            </div>
            <div className="mx-auto h-screen overflow-auto flex-1">
              <>
                {data?.data?.map((item: Tpost, idx: number) => (
                  <div key={idx} className="border rounded shadow mb-10">
                    <PostDetails id={item?._id} />
                    <Divider className="my-12 w-1/2 bg-primary mx-auto" />
                  </div>
                ))}
                <div className="bg-white h-[200px]">
                  {!allPostsLoaded && <div ref={inViewRef}>{isFetching ? <ContentLoading /> : <h3>Loading more posts...</h3>}</div>}
                  {allPostsLoaded && <h3 className="text-center mt-5 font-bold md:text-lg py-5 rounded-lg mx-4">No more posts available</h3>}
                </div>
              </>
            </div>
            <div className="h-screen overflow-auto w-[220px] hidden lg:block">
              <h3 className="font-semibold text-lg md:text-xl">Your Posts</h3>
              <div>
                {
                  posts?.data?.length > 1 ? <NoDataFound /> :

                    posts?.data?.map((post: any, idx: number) => (
                      <div key={idx} className="mb-3">
                        <Link key={post._id} href={`post/${post?._id}`}>
                          <EachPopularPost post={post} />
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}
      </>
    </Container>
  );
};

export default NewsFeed;

export const ContentLoading = () => {
  return (
    <div className="flex text-center justify-center items-center mt-16 z-50">
      <Spinner size="lg" className="text-blue-500" aria-label="Loading" />
    </div>
  );
};
