import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-2/3 mx-auto  flex flex-col items-center full'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}