import List "mo:core/List";
import Types "../types/property";

module {
  public func seedProperties(properties : List.List<Types.Property>) : () {
    properties.add({
      id = 1;
      title = "Emerald Heights Apartment";
      price = "₹65 Lakhs";
      location = "Talwandi, Kota";
      propertyType = #apartment;
      bedrooms = ?3;
      bathrooms = ?2;
      areaSqft = 1450;
      description = "A premium 3BHK apartment in the heart of Talwandi with modern amenities and builder-backed quality construction. Ideal for families seeking comfort and convenience in Kota's most sought-after neighbourhood.";
      amenities = ["24/7 Security", "Lift", "Power Backup", "Car Parking", "Club House"];
      builderTag = "Nyati Builder";
      featured = true;
    });
    properties.add({
      id = 2;
      title = "Royal Enclave Villa";
      price = "₹1.2 Crore";
      location = "Rangbari Road, Kota";
      propertyType = #villa;
      bedrooms = ?4;
      bathrooms = ?4;
      areaSqft = 2800;
      description = "An exquisite 4BHK villa on Rangbari Road combining luxury living with premium construction standards. Spacious interiors, landscaped garden, and exclusive amenities make this an unmatched residential investment.";
      amenities = ["Swimming Pool", "Garden", "Security", "3 Car Parking", "Modular Kitchen"];
      builderTag = "Nyati Builder";
      featured = true;
    });
    properties.add({
      id = 3;
      title = "Green Valley Plot";
      price = "₹28 Lakhs";
      location = "Vigyan Nagar, Kota";
      propertyType = #plot;
      bedrooms = null;
      bathrooms = null;
      areaSqft = 1800;
      description = "A prime 200 sq.yd. residential plot in Vigyan Nagar — one of Kota's fastest growing areas. Corner plot with wide road access, perfect for building your dream home or as a long-term investment.";
      amenities = ["Corner Plot", "Near School", "Wide Road", "Water Connection"];
      builderTag = "Nyati Property's";
      featured = false;
    });
  };

  public func getAll(properties : List.List<Types.Property>) : [Types.Property] {
    properties.toArray();
  };

  public func getById(properties : List.List<Types.Property>, id : Types.PropertyId) : ?Types.Property {
    properties.find(func(p) { p.id == id });
  };

  public func getFeatured(properties : List.List<Types.Property>) : [Types.Property] {
    let featured = properties.filter(func(p) { p.featured });
    featured.toArray();
  };
};
