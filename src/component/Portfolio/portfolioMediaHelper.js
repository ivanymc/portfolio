/**
 * Helper function to get media paths from src/asset folder based on project ID
 * Assets will be processed and included in the build
 * Supports both .jpg and .png formats for images
 * @param {string|number} id - The project ID
 * @returns {object} Object containing image and video paths
 */
export const getMediaPaths = (id) => {
  return {
    img: getImagePath(id),
    video: getVideoPath(id)
  };
};

/**
 * Get image path for a specific project ID
 * Tries .jpg first, then .png
 * @param {string|number} id - The project ID
 * @returns {string|null} Image path or null if not found
 */
export const getImagePath = (id) => {
  // Try JPG first
  try {
    return require(`../../asset/img/${id}.jpg`);
  } catch (error) {
    // Try PNG if JPG not found
    try {
      return require(`../../asset/img/${id}.png`);
    } catch (error) {
      console.warn(`Image not found for project ID: ${id} (tried .jpg and .png)`);
      return null;
    }
  }
};

/**
 * Get video path for a specific project ID
 * @param {string|number} id - The project ID
 * @returns {string} Video path
 */
export const getVideoPath = (id) => {
  try {
    return require(`../../asset/video/${id}Video.mp4`);
  } catch (error) {
    console.warn(`Video not found for project ID: ${id}`);
    return null;
  }
};
