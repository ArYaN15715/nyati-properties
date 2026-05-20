import List "mo:core/List";
import InquiryTypes "../types/inquiry";
import PropertyTypes "../types/property";
import CommonTypes "../types/common";

module {
  public func submit(
    inquiries : List.List<InquiryTypes.Inquiry>,
    state : { var nextId : Nat },
    name : Text,
    phone : Text,
    propertyInterest : Text,
    message : Text,
    propertyId : ?PropertyTypes.PropertyId
  ) : InquiryTypes.SubmitInquiryResult {
    if (name == "") { return #err("Name is required") };
    if (phone == "") { return #err("Phone number is required") };
    state.nextId += 1;
    let id = state.nextId;
    inquiries.add({
      id;
      name;
      phone;
      propertyInterest;
      message;
      timestamp = CommonTypes.now();
      propertyId;
    });
    #ok(id);
  };
};
