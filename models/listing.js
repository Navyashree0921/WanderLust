const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" : v,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },

    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    },
    ],
});
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
