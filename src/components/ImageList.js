import './ImageList.css'
import ImageShow from './ImageShow'

const ImageList = ({ images }) => {
    const renderImage = images.map((image) => {
        return <ImageShow key={image.id} alt_description={image.alt_description} image_url={image.urls.small}/>
    })

    return (
        <div className='image-list'>
            {renderImage}
        </div>
    )
}

export default ImageList
