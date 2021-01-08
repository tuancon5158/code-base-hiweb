class Image {
  /**
   * Constructor
   */
  constructor() {
    this.baseUrl = 'process.env.VUE_APP_IMAGE_URL;';
  }

  /**
   * Get image url
   */
  url(path) {
    return this.baseUrl + path;
  }

  /**
   * Resize image
   */
  resize(path, width, crop) {
    return this.url(path);
  }
}

export default new Image();
