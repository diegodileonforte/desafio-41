const { TrustProductsChannelEndpointAssignmentContext } = require('twilio/lib/rest/trusthub/v1/trustProducts/trustProductsChannelEndpointAssignment')

require('dotenv').config()

module.exports = {
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    CEL_PHONE_NUMBER: process.env.CEL_PHONE_NUMBER
}