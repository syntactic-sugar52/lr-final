import React, { useState } from 'react'
// import { useSession } from 'next-auth/react'
import Avatar from '../components/Avatar'
import { Link, Photograph } from 'heroicons-react'
import { useForm } from 'react-hook-form'

// interface FormData {
//   postTitle: string
//   postBody: string
//   postImage: string
//   subreddit: string
// }

// interface PostBoxProps {
//   subreddit?: string
// }

export default function PostBox() {

  const [imageBoxOpen, setImageBoxOpen] = useState(true)
    const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()




  return (

   <form
    //   onSubmit={onSubmit}

      className="top-20 z-40 bg-white border rounded-md border-gray-200 dark:bg-black-700 dark:border-gray-850"
    >
      <div className="flex items-center space-x-3 p-3">
        <div className="mb:hidden">
          <Avatar />
      
        </div>
    
        <input
      
          {...register('postTitle', { required: true })}
          className="w-full bg-[#252526] p-2 pl-5 outline-none flex-1 rounded-md dark:bg-gray-800 border dark:border-gray-850 dark:text-gray-300 dark:hover:border-gray-300 dark:hover:bg-black-300"
        //   disabled={!session}
          type="text"
        //   placeholder={
        //     session
        //       ? subreddit
        //         ? `Create a post in r/${subreddit}`
        //         : 'Create a post by entering a title!'
        //       : `Sign in to post`
        //   }
        />

        <Photograph
        //   onClick={() => setImageBoxOpen((prevState) => !prevState)}
          className={'flex-shrink-0 h-6 text-gray-300 cursor-pointer  text-blue-300 dark:text-orange-500'}
        />
        <Link className="flex-shrink-0 h-6 text-gray-300 cursor-pointer" />
      </div>
      {!!watch('postTitle') && (
        <div className="flex flex-col p-2">
          <div className="flex items-center px-2">
            <p className="min-w-[5.625rem] dark:text-gray-800">Body:</p>
            <textarea
              className="m-2 flex-1 bg-blue-50 p-2 outline-none dark:bg-gray-900 rounded-md border dark:border-gray-850 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-black-700"
              type="text"
              placeholder="Text"
              {...register('postBody')}
            />
          </div>

          {/* {!subreddit && (
           
          )} */}
 <div className="flex items-center px-2">
              <p className="min-w-[5.625rem] dark:text-gray-800">Room:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none dark:bg-gray-900 rounded-md border dark:border-gray-850 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-black-700"
                type="text"
                placeholder="i.e. reactjs"
                {...register('subreddit', { required: true })}
              />
            </div>
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[5.625rem] dark:text-gray-800">Image URL:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none rounded-md border dark:bg-gray-900 dark:border-gray-850 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-black-700"
                type="text"
                placeholder="https://example.com/example-image.png"
                {...register('postImage')}
              />
            </div>
          )}

          {!!Object.keys(errors).length && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === 'required' && (
                <p>- A Post Title is required</p>
              )}

              {errors.subreddit?.type === 'required' && (
                <p>- A Room is required</p>
              )}
            </div>
          )}

          {!!watch('postTitle') && (
            <button
              type="submit"
              className="max-w-full rounded-3xl bg-blue-400 mt-2 p-2 mx-3 text-white font-medium dark:bg-blue-600 dark:hover:brightness-110"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
    
   
  )
}
