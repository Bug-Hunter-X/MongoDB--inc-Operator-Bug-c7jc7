```javascript
// Correct usage of $inc operator, including data type validation
db.collection.findOne({"_id":ObjectId("someId")}, (err, doc)=>{if(err) {console.error(err)}else{
if(typeof doc.field === 'number'){
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
}else{
console.error("Field is not a number");
}
}
});
```