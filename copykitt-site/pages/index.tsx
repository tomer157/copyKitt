import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from "next";
import Head from "next/head";
import CopyKitt from '@/components/copyKitt';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>CopyKitt Tutorial | AI Generated Marketing</title>
        <meta
          name="description"
          content="Generate branding snippets for your product."
        />

        
      </Head>

      <CopyKitt />
    </div>
  )
}
