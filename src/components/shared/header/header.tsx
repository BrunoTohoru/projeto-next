import { Instagram, Github, Twitter } from 'lucide-react';
import NextLink from 'next/link';

export const Header = () => {

    return (
        <div className="flex flex-row justify-between items-center px-24 py-9">
            <div>
                <NextLink href='/'>
                    <span className='text-2xl font-semibold'>Logo</span>
                </NextLink>
            </div>
            <div className="flex flex-row gap-16">
                <NextLink href='/'>
                    <h1>Home</h1>
                </NextLink>
                <NextLink href='/about'>
                    <h1>About</h1>
                </NextLink>
                <NextLink href='/work'>
                    <h1>Work</h1>
                </NextLink>
            </div>
            <div className='flex flex-row gap-7'>
                <NextLink href='https://instagram.com' target='_black'>
                    <Instagram />
                </NextLink>
                <NextLink href='https://Twitter.com' target='_black'>
                    <Twitter />
                </NextLink>
                <NextLink href='https://github.com/brunotohoru' target='_black'>
                    <Github />
                </NextLink>
            </div>
        </div>
    )
}
