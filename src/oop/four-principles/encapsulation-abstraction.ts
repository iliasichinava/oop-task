interface ImageCompressor {
    compress_png(image: any): any;
    compress_jpg(image: any): any;
}

class Compressor implements ImageCompressor {
    
    /** PUBLIC FIELDS */
    
    public constructor() {}
    
    public compress_png(image: any) {
        return "PNG";
    }
    public compress_jpg(image: any) {
        return "JPG";
    }


    /** PRIVATE FIELDS */
    
    private svd() {}
    private get_png_image_from_bytes() {}
    private get_jpg_image_from_bytes() {}
    private transform_image_to_matrix() {}
    private transpose_matrix() {}
    private count_eigen_values() {}
    private diagonalize_matrix() {}

}