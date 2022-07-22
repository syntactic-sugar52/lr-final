import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import SignUp from '../components/Signup'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import PostBox from '../components/PostBox'

const style = {
  wrapper: `flex justify-between h-screen w-screen select-none bg-[#252526] text-white`,
  homeWrapper: `flex`,
  center: `flex-1`,
  content: `max-w-[1500px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  signUpContainer: `flex items-center justify-center w-screen h-[70vh]`,
}

const Home: NextPage = () => {
  const [registered, setRegistered] = useState(true)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [users, setUsers] = useState([])
  return (
    <div className={style.wrapper}>
      {registered ? (
        <div className={style.wrapper}>
          <div className={style.content}>
            <SideBar />
            <div className={style.mainContent}>
              <PostBox />
              <div className="mt-6">
                <Feed />
                 <Feed />
                  <Feed />
                   <Feed />
                    <Feed />
              </div>
            </div>

            {/* <div className={style.homeWrapper}> */}
          </div>
          <Widgets />
        </div>
      ) : (
        // </div>
        <div className={style.signUpContainer}>
          <SignUp
            setRegistered={setRegistered}
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
          />
        </div>
      )}
    </div>
  )
}

export default Home
