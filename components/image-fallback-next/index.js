import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import { prefix } from "utils/const";
// import {
// 	toBase64, shimmerImgLoader,
// } from "Helpers/utils";

const ImageFallbackWithNext = ({
	src, alt, outOfStock, objectFit, ...props
}) => {

	const fallBackSrc = `${prefix}/placeholder_image_not_found.png`;
	const [imageError, setImageError] = useState(false);
	// const [isLoading, setLoading] = useState(true);

	return (
		
		<Image
		className={`img-fallback`}
		src={imageError ? fallBackSrc : src}
		alt={alt}
		// blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmerImgLoader(400, 400))}`}
		objectFit={objectFit}
		layout="fill"
		onError={() => setImageError(true)}
		// onLoadingComplete={() => setLoading(false)}
		{...props}
	/>
	);

};

ImageFallbackWithNext.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	objectFit: PropTypes.string,
};

ImageFallbackWithNext.defaultProps = {
	objectFit: "contain",
};

export default ImageFallbackWithNext;
