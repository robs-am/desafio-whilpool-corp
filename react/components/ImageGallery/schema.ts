export const ImageGallerySchema = {
  "title": "Image Gallery",
  "type": "object",
  "properties": {
    "images": {
      "title": "Images",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "src": {
            "type": "string",
            "title": "Image URL"
          },
          "alt": {
            "type": "string",
            "title": "Alt Text"
          }
        },
        "required": ["src", "alt"]
      }
    }
  },
  "required": []
};
