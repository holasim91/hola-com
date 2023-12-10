"use client"
import style from '@/app/(afterLogin)/[username]/profile.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function FollowButton(){
    const {data:session} = useSession()
    const route = useRouter()
    const onClickFollow = () =>{
        if(session?.user){
            alert('Follow 추가')
        }else{
            route.replace('/login')
        }
    }
    return(
        <button className={style.followButton} onClick={onClickFollow}>팔로우</button>
    )
}