import mongoose from "mongoose"
const Schema = mongoose.Schema

const FreelancersSchema = new Schema({
  "name": {
    type: String,
    
 
  },
  "end_year": {
    type: String,
    
  },
  "intensity": {
    type: String,
  },
  "sector": {
    type: String,
  },
  "topic": {
    type: String,
  },
  "insight": {
    type: String,
  },
  "url": {
    type: String,
  },
  "region": {
    type: String,
  },
  "start_year": {
    type: String,
  },
"impact": {
    type: String,
},
"added": {
    type: String,
},
"published": {
    type: String,
},
"country": {
    type: String,
},
"relevance": {
    type: String,
},
"pestle": {
    type: String,
},
"source": {
    type: String,
},
"title": {
    type: String,
},
"likelihood": {
    type: String,
},

})

const Freelancers = mongoose.model('Freelancer', FreelancersSchema)
export default Freelancers

