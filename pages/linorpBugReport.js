import Head from 'next/head'

export default function linorpBugReport(props) {
    return (
        <div className="h-screen py-20">
            <Head>
                <title>SPANiLK - LINORP Bug Tracker</title>
            </Head>
            <iframe src="https://app.startinfinity.com/form/f78a3739-9fb8-4b9e-aa24-a005bf73abb7" className="w-full"  style={{border: 0},{width:100+'%'},{height:100+'%'}}></iframe>
        </div>
)}