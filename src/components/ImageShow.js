const ImageShow = ({ alt_description, image_url }) => {
    return (
        <div>
            <img src={image_url} alt={alt_description}></img>
        </div>
    )
}

export default ImageShow
