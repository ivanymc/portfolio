/**
 * Helper function to get media paths from public folder based on project ID
 * @param {string|number} id - The project ID
 * @returns {object} Object containing image and video paths
 */
export const getMediaPaths = (id) => {
  return {
    img: `/asset/img/${id}.jpg`,
    video: `/asset/video/${id}Video.mp4`
  };
};

/**
 * Get image path for a specific project ID
 * @param {string|number} id - The project ID
 * @returns {string} Image path
 */
export const getImagePath = (id) => `/asset/img/${id}.jpg`;

/**
 * Get video path for a specific project ID
 * @param {string|number} id - The project ID
 * @returns {string} Video path
 */
export const getVideoPath = (id) => `/asset/video/${id}Video.mp4`;
