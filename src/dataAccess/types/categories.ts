export enum CategoryType {
    BICYCLE = 'Bicycle',
    BOOK = 'Book',
    BEAUTY_PRODUCTS = 'Beauty products',
    CLOTHES = 'Clothes',
    FURNITURE = 'Furniture',
    MUSICAL_INSTRUMENTS = 'Musical instruments',
    ELECTRONIC_ITEMS = 'Electronic items',
    SPORTS_EQUIPMENT = 'Sports equipment',
    TOOLS = 'Tools',
    OTHER = 'Other',
}

export interface Category {
    name: CategoryType;
}
