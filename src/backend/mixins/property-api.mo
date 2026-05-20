import List "mo:core/List";
import PropertyTypes "../types/property";
import PropertyLib "../lib/property";

mixin (properties : List.List<PropertyTypes.Property>) {
  public query func getProperties() : async [PropertyTypes.Property] {
    PropertyLib.getAll(properties);
  };

  public query func getProperty(id : PropertyTypes.PropertyId) : async ?PropertyTypes.Property {
    PropertyLib.getById(properties, id);
  };

  public query func getFeaturedProperties() : async [PropertyTypes.Property] {
    PropertyLib.getFeatured(properties);
  };
};
