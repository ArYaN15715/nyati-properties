import List "mo:core/List";
import InquiryTypes "../types/inquiry";
import PropertyTypes "../types/property";
import InquiryLib "../lib/inquiry";

mixin (
  inquiries : List.List<InquiryTypes.Inquiry>,
  state : { var nextId : Nat }
) {
  public shared func submitInquiry(
    name : Text,
    phone : Text,
    propertyInterest : Text,
    message : Text,
    propertyId : ?PropertyTypes.PropertyId
  ) : async InquiryTypes.SubmitInquiryResult {
    InquiryLib.submit(inquiries, state, name, phone, propertyInterest, message, propertyId);
  };
};
