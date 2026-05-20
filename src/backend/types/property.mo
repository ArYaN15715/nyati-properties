import Common "common";

module {
  public type PropertyId = Common.Id;

  public type PropertyType = {
    #apartment;
    #plot;
    #villa;
    #commercial;
  };

  public type Property = {
    id : PropertyId;
    title : Text;
    price : Text;
    location : Text;
    propertyType : PropertyType;
    bedrooms : ?Nat;
    bathrooms : ?Nat;
    areaSqft : Nat;
    description : Text;
    amenities : [Text];
    builderTag : Text;
    featured : Bool;
  };
};
