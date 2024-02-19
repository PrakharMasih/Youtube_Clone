import React from 'react'

const SearchBtn = ({ suggestionResult }) => {
    return (
        <button
            className='w-full self-center  pl-8 rounded-lg text-start hover:bg-gray-200 border-lg '
            onClick={(e) => { e.stopPropagation(); console.log('clicked') }}
        >
            ⌕ {suggestionResult}
        </button>
        // <button onClick={(e) => { e.stopPropagation(); test() }>Test</button>
    )
}

export default SearchBtn