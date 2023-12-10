import { auth } from '@/auth'
import Main from './_component/Main'

export default async function Home() {
  const session = await auth()
  if(session?.user) {
    return null
  }
  return (
    <>
      <Main />
    </>
  )
}
