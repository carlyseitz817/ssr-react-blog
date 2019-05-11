import React from 'react';
import Link from 'next/link'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Link href="/">
                    <a> Home </a>
                </Link>
                <Link href="/about">
                    <a> About </a>
                </Link>
                <Link href="/blog">
                    <a> Blog </a>
                </Link>
            </div>
        )
    }
}

export default Header