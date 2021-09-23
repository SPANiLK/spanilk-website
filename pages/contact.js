import Head from 'next/head'

export default function contact(props) {
    return (
        <div className="h-screen py-20">
            <Head>
                <title>SPANiLK - Contact</title>
            </Head>
            <iframe src="https://app.startinfinity.com/form/8e686fb7-f181-430a-9b98-4e36ab42ea9d" className="w-full"  style={{border: 0},{width:100+'%'},{height:100+'%'}}></iframe>
        </div>
)}