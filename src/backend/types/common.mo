import Time "mo:core/Time";

module {
  public type Id = Nat;
  public type Timestamp = Int;

  public func now() : Timestamp { Time.now() };
};
