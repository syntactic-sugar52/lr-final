import Image from 'next/image'
// import { useSession } from 'next-auth/react'

// interface AvatarProps {
//   seed?: string
//   large?: boolean
//   size?: string | number
// }
  const generateRandomProfileImageUrl = () =>
    setUrl(
      `https://avatars.dicebear.com/api/pixel-art-neutral/${Math.floor(
        Math.random() * 100,
      )}.svg`,
    )
    
    let url =   `https://avatars.dicebear.com/api/pixel-art-neutral/${Math.floor(
        Math.random() * 100,
      )}.svg`

export default function Avatar({ large, seed, size }) {
//   const { data: session } = useSession()

  return (
    <div
      className={`relative overflow-hidden ${
        !size ? 'h-10 w-10' : `h-${size} w-${size}` 
      }  ${large && 'h-20 w-20'} rounded-full border-gray-300 bg-white`}
    >
      <Image
      src={ url }
        alt="avatar img"
        layout="fill"
      />
    </div>
  )
}

