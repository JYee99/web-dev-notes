'use client'

import axios from "axios"

export default function Page() {

    const onClickAsync = () => {
        const result = axios.get('https://koreanjson.com/posts/1')
        console.log(result); // Promise

    }
    const onClickSync = async () => {
        const result = await axios.get('https://koreanjson.com/posts/1')
        console.log(result);
        console.log(result.data.title);
    }

    return (
        <>
            <h1>REST Example</h1>
            <div>
                <button onClick={onClickAsync}>REST-API 비동기 요청</button>
                <button onClick={onClickSync}>REST-API 동기 요청</button>
            </div>
        </>
    )
}