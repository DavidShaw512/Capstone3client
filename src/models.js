// Mapping out models

user = {
    email,
    password,
    sandwiches: [],
    ingredients: []
}

sandwich = {
    user,
    name,
    ingredients: {
        bread,
        meat,
        cheese,
        veggies: [],
        sauces: [],
    },
    public: false
}

ingredient = {
    user,
    name,
    category,
    servingSize,
    nutrition: {
        calories,
        protien,
        fat,
        carbs,
    },
    public: false
}