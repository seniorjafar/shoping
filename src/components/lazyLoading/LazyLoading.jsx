import React from 'react'
import Loading from '../../../public/loading.gif'

const LazyLoading = () => {
    return (
        <div className='lazyLoading'>
            <div className='lazyLoading__icon'>
                <img src={Loading} alt="" />
            </div>
        </div>
    )
}

export default LazyLoading
