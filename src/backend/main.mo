import List "mo:core/List";
import PropertyLib "lib/property";
import PropertyMixin "mixins/property-api";
import InquiryMixin "mixins/inquiry-api";
import PropertyTypes "types/property";
import InquiryTypes "types/inquiry";

actor {
  let properties = List.empty<PropertyTypes.Property>();
  let inquiries = List.empty<InquiryTypes.Inquiry>();
  let state = { var nextId : Nat = 0 };

  PropertyLib.seedProperties(properties);

  include PropertyMixin(properties);
  include InquiryMixin(inquiries, state);
};

