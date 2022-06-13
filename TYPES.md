### TYPES

Shipping: {
Adress,
City,
Province,
Zip Code,
Notes
}

User:{
Id,
archived,
Avatar,
Email,
Roles,
Name,
}

Order:{
shippingData,
items:OrderItem[],
user:ObjectId Mongoose
}

OrderItem:{
productName,
quantity,
price
}
