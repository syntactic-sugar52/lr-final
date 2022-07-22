import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ChatAltOutline,
  GiftOutline,
  ShareOutline,
  BookmarkOutline,
  DotsHorizontalOutline,
} from "heroicons-react";
import Avatar from "../components/Avatar";
// import TimeAgo from 'react-timeago'
import Link from "next/link";

// import { Jelly } from '@uiball/loaders'
// import { useSession } from 'next-auth/react'
// import toast from 'react-hot-toast'

export default function Feed() {
  const [vote, setVote] = useState(false);

  return (
    <article className=" flex border-gray-800 bg-white shadow-sm">
      <div className="flex flex-col w-12 items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400 dark:bg-black-700">
        <ArrowUp
          //   onClick={() => upVote(true)}
          className={`voteButtons hover:text-red-400 ${
            vote && "text-orange-500"
          }`}
        />
        <span
          className={`text-black font-bold text-xs ${
            vote ? "text-orange-500" : "text-blue-400"
          }`}
        >
          {/* {displayVotes(data)} */}
        </span>
        <ArrowDown
          onClick={() => upVote(false)}
          className={`voteButtons hover:text-blue-400 ${
            vote === false && "text-blue-400"
          }`}
        />
      </div>

      <div className="flex-shrink-1 p-3 pb-1 w-full dark:bg-black-700">
        <header className="flex items-center space-x-2">
          <Avatar />
          {/* <Avatar seed={post.subreddit[0]?.topic} /> */}
          <p className="text-xs text-gray-800 w-full">
            {/* <Link href={`/subreddit/${post.subreddit[0]?.topic}`}> */}
            <span className="font-bold text-black hover:underline dark:text-gray-800">
              {/* r/{post.subreddit[0]?.topic} */}
              Fly High
            </span>
            {/* </Link>{' '} */}* Posted by username
            {/* {post.username} */}
            {/* <TimeAgo date={post.created_at} /> */}
          </p>
        </header>

        <div className="py-4">
          <h2 className="text-xl font-semibold dark:text-gray-800">
            {/* {post.title} */}
            hello
          </h2>
          <p className="mt-2 text-sm font-light dark:text-gray-800">
            {/* {post.body} */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div>
          {/* {post.image && ( */}
          {/* <img src={post.image} alt="image" className="w-full" /> */}
          {/* )} */}
        </div>

        <div className="flex space-x-4 flex-shrink text-gray-500 mt-2 mb:justify-end">
          <div
            className="postButtons"
            //   onClick={goToComments}
          >
            <ChatAltOutline className="h-4 w-4" />
            <p className="text-xs">
              {/* {post.comments.length}  */}
              Comments
            </p>
          </div>

          {/* <div className="postButtons"> */}
            <button   className="max-w-10 rounded-3xl bg-blue-400 mt-2 p-2 mx-3 text-white font-medium dark:bg-blue-600 dark:hover:brightness-110">
              Watch
            </button>
          {/* </div> */}
        </div>
      </div>
    </article>
    //   ) : (
    //     <Link href={`/post/${post.id}`}>
    //       <article className="rounded-md overflow-hidden flex cursor-pointer border border-gray-200 bg-white shadow-sm hover:border-gray-600 dark:border-gray-850 dark:hover:border-gray-500">
    //         <div className="flex flex-col w-12 items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400 dark:bg-black-600">
    //           <ArrowUp
    //             onClick={() => upVote(true)}
    //             className={`voteButtons hover:text-orange-500 ${
    //               vote && 'text-orange-500'
    //             }`}
    //           />
    //           <span
    //             className={`text-black font-bold text-xs ${
    //               vote ? 'dark:text-orange-500' : 'dark:text-blue-400'
    //             }`}
    //           >
    //             {displayVotes(data)}
    //           </span>
    //           <ArrowDown
    //             onClick={() => upVote(false)}
    //             className={`voteButtons hover:text-blue-400 ${
    //               vote === false && 'text-blue-400'
    //             }`}
    //           />
    //         </div>

    //         <div className="flex-shrink-1 p-3 pb-1 w-full dark:bg-black-700">
    //           <header className="flex items-center space-x-2">
    //             <Avatar seed={post.subreddit[0]?.topic} />
    //             <p className="text-xs text-gray-400 w-full">
    //               <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
    //                 <span className="font-bold text-black hover:underline dark:text-gray-100">
    //                   r/{post.subreddit[0]?.topic}
    //                 </span>
    //               </Link>{' '}
    //               * Posted bt u/
    //               {post.username} <TimeAgo date={post.created_at} />
    //             </p>
    //           </header>

    //           <div className="py-4">
    //             <h2 className="text-xl font-semibold dark:text-gray-300">
    //               {post.title}
    //             </h2>
    //             <p className="mt-2 text-sm font-light dark:text-gray-200">
    //               {post.body}
    //             </p>
    //           </div>

    //           <div>
    //             {post.image && (
    //               <img src={post.image} alt="image" className="w-full" />
    //             )}
    //           </div>

    //           <div className="flex space-x-4 flex-shrink text-gray-400 mt-2 mb:justify-between">
    //             <div className="postButtons">
    //               <ChatAltOutline className="h-6 w-6" />
    //               <p className="mb:text-xs">{post.comments.length} Comments</p>
    //             </div>
    //             <div className="postButtons mb:hidden">
    //               <GiftOutline className="max-h-6 max-w-6" />
    //               <p className="hidden sm:inline">Award</p>
    //             </div>
    //             <div className="postButtons mb:hidden">
    //               <ShareOutline className="max-h-6 max-w-6" />
    //               <p className="hidden sm:inline">Share</p>
    //             </div>
    //             <div className="postButtons mb:hidden">
    //               <BookmarkOutline className="max-h-6 max-w-6" />
    //               <p className="hidden sm:inline">Save</p>
    //             </div>
    //             <div className="postButtons">
    //               <DotsHorizontalOutline className="h-6 w-6" />
    //             </div>
    //           </div>
    // </div>
    //   </article>
    // </Link>
  );
}
