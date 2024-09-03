import { Profile } from "./Profile.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels || "No levels provided."
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || "No description provided."
    this.creatorId = data.creatorId
    this.creator = new Profile(data.creator)
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-md-12 p-0 mb-3">
      <section class="row bg-dark shadow text-light house-border-LG">
        <div class="col-md-4 p-0">
          <img
            src="${this.imgUrl}"
            alt="${this.year} ${this.price}" class="img-fluid house-img">
        </div>
        <div class="col-md-8">
          <div class="p-2">
            <p>Year: ${this.year}</p>
            <p>Levels: ${this.levels}</p>
            <p>Bedrooms: ${this.bedrooms}</p>
            <p>Bathrooms: ${this.bathrooms}</p>
            <p>Price: ${this.price}</p>
            <p>Description: ${this.description}</p>
          </div>
        </div>
      </section>

    </div>
    `
  }

}


//NOTE - Properties pulled from https://sandbox.codeworksacademy.com/
// bedrooms: Number, required
// bathrooms: Number, required
// levels: Number, required
// imgUrl: String,
// year: Number, required
// price: Number, required
// description: String,
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)