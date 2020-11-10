import React from 'react'
import { Buffer } from 'buffer';
import Identicon from 'react-identicons';

const genAvatar = (string, size) => {
    if (string) {
        const buffer = Buffer.from(string, 'utf8').toString('hex');
        return <Identicon string={buffer} size={size} />
    }
    else return <i className="fa fa-user-circle-o" aria-hidden="true"></i>
}

export default genAvatar;
