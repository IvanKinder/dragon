import React from 'react'
import test_img from '../../../../static/media/test_img.png'

const Galery = () => {
    const galeryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridRowGap: '5vh',
        width: '85vw',
        gridColumnGap: '2.7vw'
    },
        pictures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        <div style={galeryStyle}>
            {pictures.map((el) =>
            <img src={test_img} key={el}/>)
            }
        </div>
    )
}

export default Galery
