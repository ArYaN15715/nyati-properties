import Common "common";
import Property "property";

module {
  public type InquiryId = Common.Id;

  public type Inquiry = {
    id : InquiryId;
    name : Text;
    phone : Text;
    propertyInterest : Text;
    message : Text;
    timestamp : Common.Timestamp;
    propertyId : ?Property.PropertyId;
  };

  public type SubmitInquiryResult = { #ok : InquiryId; #err : Text };
};
