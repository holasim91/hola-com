import style from "@/app/(afterLogin)/home/home.module.css"
import Tab from "./_component/Tab"
import PostForm from "./_component/PostForm"
import TabProvider from "./_component/TabProvider"
import Post from "../_component/Post"

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
      <Tab />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </TabProvider>
    </main>
     )
}
