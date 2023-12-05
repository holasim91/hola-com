// 리다이렉트를 위해
'use client'

import { useRouter } from "next/navigation"
import Image from 'next/image'
import styles from '../../page.module.css'
import Link from 'next/link'
import LogoImg from '../../../../public/zlogo.png'
import Main from "../_component/Main"

export default function Login(){
    const router = useRouter()
    router.replace('/i/flow/login')
    return (
        
      <Main />
    )
}