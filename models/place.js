class Place {
  constructor(place_id, category_ids, place_name, place_description, latitude, longitude, isFavourite, isVisited, main_image, gallery_images, isFeesApplicable) {
    this.place_id = place_id;
    this.category_ids = category_ids;
    this.place_name = place_name;
    this.place_description = place_description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.isFavourite = isFavourite;
    this.isVisited = isVisited;
    this.main_image = main_image;
    this.gallery_images = gallery_images;
    this.isFeesApplicable = isFeesApplicable;
  }
}

export default Place;
