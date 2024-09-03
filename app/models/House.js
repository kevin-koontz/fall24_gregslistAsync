export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || "No description provided."
    this.creatorId = data.creatorId

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